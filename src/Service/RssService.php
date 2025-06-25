<?php

namespace App\Service;

use App\Entity\Article;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class RssService
{
    private HttpClientInterface $httpClient;
    private LoggerInterface $logger;

    // Configuration des flux RSS par catégorie
    private array $rssFeeds = [
        'IA' => [
            'https://feeds.feedburner.com/AITopics' => 'AI Topics',
            'https://machinelearningmastery.com/feed/' => 'ML Mastery',
            'https://www.analyticsvidhya.com/feed/' => 'Analytics Vidhya',
        ],
        'Mobile' => [
            'https://feeds.feedburner.com/androidcentral-android' => 'Android Central',
            'https://www.smashingmagazine.com/feed/' => 'Smashing Magazine Mobile',
            'https://medium.com/feed/react-native-training' => 'React Native',
        ],
        'DevOps' => [
            'https://devops.com/feed/' => 'DevOps.com',
            'https://www.docker.com/blog/feed/' => 'Docker Official',
            'https://circleci.com/blog/feed.xml' => 'CircleCI',
        ]
    ];

    public function __construct(LoggerInterface $logger)
    {
        $this->httpClient = HttpClient::create([
            'timeout' => 30,
            'headers' => [
                'User-Agent' => 'Mozilla/5.0 (RSS Reader Portfolio Adrien Pago)',
            ],
            // Configuration SSL pour Windows (développement)
            'verify_peer' => false,
            'verify_host' => false,
            'cafile' => false
        ]);
        $this->logger = $logger;
    }

    /**
     * Récupère les articles depuis tous les flux RSS
     */
    public function fetchAllArticles(): array
    {
        $allArticles = [];

        foreach ($this->rssFeeds as $category => $feeds) {
            $categoryArticles = $this->fetchArticlesByCategory($category);
            $allArticles = array_merge($allArticles, $categoryArticles);
        }

        return $allArticles;
    }

    /**
     * Récupère les articles d'une catégorie spécifique
     */
    public function fetchArticlesByCategory(string $category): array
    {
        if (!isset($this->rssFeeds[$category])) {
            $this->logger->warning("Catégorie RSS inconnue: {$category}");
            return [];
        }

        $articles = [];
        $feeds = $this->rssFeeds[$category];

        foreach ($feeds as $feedUrl => $sourceName) {
            try {
                $feedArticles = $this->fetchFromFeed($feedUrl, $sourceName, $category);
                $articles = array_merge($articles, $feedArticles);
                
                $this->logger->info("Articles récupérés depuis {$sourceName}: " . count($feedArticles));
            } catch (\Exception $e) {
                $this->logger->error("Erreur lors de la récupération du flux {$feedUrl}: " . $e->getMessage());
            }
        }

        // Trier par date de publication (plus récent en premier)
        usort($articles, function($a, $b) {
            return $b->getPublishedAt() <=> $a->getPublishedAt();
        });

        // Limiter à 2 articles par catégorie pour éviter la surcharge
        return array_slice($articles, 0, 2);
    }

    /**
     * Parse un flux RSS spécifique
     */
    private function fetchFromFeed(string $feedUrl, string $sourceName, string $category): array
    {
        try {
            $response = $this->httpClient->request('GET', $feedUrl);
            $xmlContent = $response->getContent();
            
            // Désactiver les erreurs libxml temporairement
            libxml_use_internal_errors(true);
            
            $xml = simplexml_load_string($xmlContent);
            
            if ($xml === false) {
                $errors = libxml_get_errors();
                $errorMsg = "Erreur XML pour {$feedUrl}: " . implode(', ', array_map(fn($err) => $err->message, $errors));
                $this->logger->error($errorMsg);
                libxml_clear_errors();
                return [];
            }

            libxml_use_internal_errors(false);

            return $this->parseRssFeed($xml, $sourceName, $category);
            
        } catch (\Exception $e) {
            $this->logger->error("Erreur HTTP pour {$feedUrl}: " . $e->getMessage());
            return [];
        }
    }

    /**
     * Parse le contenu XML d'un flux RSS
     */
    private function parseRssFeed(\SimpleXMLElement $xml, string $sourceName, string $category): array
    {
        $articles = [];

        // Support RSS 2.0 et Atom
        $items = $xml->channel->item ?? $xml->entry ?? [];

        foreach ($items as $item) {
            try {
                $article = $this->createArticleFromRssItem($item, $sourceName, $category);
                if ($article) {
                    $articles[] = $article;
                }
            } catch (\Exception $e) {
                $this->logger->warning("Erreur lors du parsing d'un article: " . $e->getMessage());
            }
        }

        return $articles;
    }

    /**
     * Crée un objet Article depuis un item RSS
     */
    private function createArticleFromRssItem(\SimpleXMLElement $item, string $sourceName, string $category): ?Article
    {
        // Extraire les données selon le format (RSS 2.0 ou Atom)
        $title = $this->extractText($item->title);
        $description = $this->extractText($item->description ?? $item->summary ?? $item->content);
        $url = $this->extractText($item->link ?? $item->id);
        $guid = $this->extractText($item->guid ?? $item->id ?? $url);
        
        // Gérer les dates (formats multiples)
        $pubDate = $this->parseDate($item->pubDate ?? $item->published ?? $item->updated);
        
        // Validation des données essentielles
        if (empty($title) || empty($url) || empty($guid)) {
            return null;
        }

        $article = new Article();
        $article->setTitle($this->sanitizeText($title, 255))
                ->setDescription($this->sanitizeText($description, 2000))
                ->setUrl($this->sanitizeText($url, 500))
                ->setCategory($category)
                ->setSource($sourceName)
                ->setGuid($this->generateUniqueGuid($guid, $sourceName))
                ->setPublishedAt($pubDate ?? new \DateTime());

        // Extraction optionnelle de l'image
        $image = $this->extractImage($item);
        if ($image) {
            $article->setImage($this->sanitizeText($image, 500));
        }

        // Contenu complet (optionnel)
        $content = $this->extractText($item->content ?? $item->{'content:encoded'});
        if ($content) {
            $article->setContent($content);
        }

        return $article;
    }

    /**
     * Extrait le texte d'un élément XML
     */
    private function extractText(?\SimpleXMLElement $element): string
    {
        if (!$element) {
            return '';
        }

        return trim(strip_tags((string) $element));
    }

    /**
     * Parse différents formats de date
     */
    private function parseDate(?\SimpleXMLElement $dateElement): ?\DateTime
    {
        if (!$dateElement) {
            return null;
        }

        $dateString = (string) $dateElement;
        
        try {
            return new \DateTime($dateString);
        } catch (\Exception $e) {
            $this->logger->warning("Format de date non reconnu: {$dateString}");
            return null;
        }
    }

    /**
     * Extrait l'URL d'une image depuis l'item RSS
     */
    private function extractImage(\SimpleXMLElement $item): ?string
    {
        try {
            // Méthode simple sans xpath pour éviter les problèmes de namespace
            if (isset($item->enclosure)) {
                $enclosure = $item->enclosure;
                $type = (string) $enclosure['type'];
                if (strpos($type, 'image/') === 0) {
                    return (string) $enclosure['url'];
                }
            }

            // Essayer d'autres méthodes simples
            if (isset($item->image->url)) {
                return (string) $item->image->url;
            }

            return null;
        } catch (\Exception $e) {
            return null;
        }
    }

    /**
     * Nettoie et limite la longueur du texte
     */
    private function sanitizeText(string $text, int $maxLength): string
    {
        $text = html_entity_decode($text, ENT_QUOTES | ENT_HTML5, 'UTF-8');
        $text = preg_replace('/\s+/', ' ', $text);
        $text = trim($text);
        
        return mb_substr($text, 0, $maxLength, 'UTF-8');
    }

    /**
     * Génère un GUID unique pour éviter les doublons
     */
    private function generateUniqueGuid(string $originalGuid, string $source): string
    {
        return md5($source . '|' . $originalGuid);
    }

    /**
     * Récupère la liste des flux RSS configurés
     */
    public function getRssFeeds(): array
    {
        return $this->rssFeeds;
    }

    /**
     * Test de connectivité d'un flux RSS
     */
    public function testFeed(string $feedUrl): array
    {
        try {
            $response = $this->httpClient->request('GET', $feedUrl);
            $statusCode = $response->getStatusCode();
            
            if ($statusCode === 200) {
                $xmlContent = $response->getContent();
                $xml = simplexml_load_string($xmlContent);
                
                if ($xml !== false) {
                    $itemCount = count($xml->channel->item ?? $xml->entry ?? []);
                    return [
                        'success' => true,
                        'status_code' => $statusCode,
                        'items_count' => $itemCount,
                        'message' => "Flux OK - {$itemCount} articles trouvés"
                    ];
                } else {
                    return [
                        'success' => false,
                        'status_code' => $statusCode,
                        'message' => 'Erreur de parsing XML'
                    ];
                }
            } else {
                return [
                    'success' => false,
                    'status_code' => $statusCode,
                    'message' => "Erreur HTTP: {$statusCode}"
                ];
            }
        } catch (\Exception $e) {
            return [
                'success' => false,
                'status_code' => 0,
                'message' => "Erreur: " . $e->getMessage()
            ];
        }
    }
} 