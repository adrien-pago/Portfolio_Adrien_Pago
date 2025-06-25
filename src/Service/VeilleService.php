<?php

namespace App\Service;

class VeilleService
{
    /**
     * Articles simulés pour tester l'interface
     * (En attendant l'intégration complète avec RSS + BDD)
     */
    public function getLatestArticles(int $limit = 6): array
    {
        $articles = [
            [
                'id' => 1,
                'title' => 'Les dernières avancées en Intelligence Artificielle Générative',
                'description' => 'Découvrez les nouvelles capacités des modèles de langage de dernière génération et leur impact sur le développement d\'applications intelligentes.',
                'url' => 'https://example.com/ia-generative-2024',
                'category' => 'IA',
                'date' => new \DateTime('2024-06-20'),
                'source' => 'AI Research',
                'image' => null
            ],
            [
                'id' => 2,
                'title' => 'Flutter 3.24 : Nouvelles fonctionnalités pour le développement mobile',
                'description' => 'La dernière version de Flutter apporte des améliorations de performance significatives et de nouveaux widgets pour créer des applications mobiles encore plus fluides.',
                'url' => 'https://flutter.dev/whats-new',
                'category' => 'Mobile',
                'date' => new \DateTime('2024-06-18'),
                'source' => 'Flutter Team',
                'image' => null
            ],
            [
                'id' => 3,
                'title' => 'Kubernetes 1.31 : Gestion simplifiée des clusters',
                'description' => 'Cette nouvelle version de Kubernetes introduit des outils avancés pour automatiser le déploiement et améliorer la sécurité des applications conteneurisées.',
                'url' => 'https://kubernetes.io/blog/2024/06/kubernetes-1-31',
                'category' => 'DevOps',
                'date' => new \DateTime('2024-06-15'),
                'source' => 'Kubernetes',
                'image' => null
            ],
            [
                'id' => 4,
                'title' => 'ChatGPT-4o : Révolution dans l\'interaction homme-machine',
                'description' => 'OpenAI dévoile son nouveau modèle multimodal capable de traiter simultanément texte, image et audio pour des interactions plus naturelles.',
                'url' => 'https://openai.com/blog/chatgpt-4o',
                'category' => 'IA',
                'date' => new \DateTime('2024-06-12'),
                'source' => 'OpenAI',
                'image' => null
            ],
            [
                'id' => 5,
                'title' => 'React Native 0.75 : Performance et stabilité améliorées',
                'description' => 'Meta publie une nouvelle version majeure de React Native avec des optimisations significatives pour les applications iOS et Android.',
                'url' => 'https://reactnative.dev/blog/2024/06/react-native-0.75',
                'category' => 'Mobile',
                'date' => new \DateTime('2024-06-10'),
                'source' => 'Meta',
                'image' => null
            ],
            [
                'id' => 6,
                'title' => 'Docker Desktop 4.32 : Nouveaux outils de développement',
                'description' => 'Docker améliore son interface de développement avec des fonctionnalités avancées de monitoring et de debugging pour les conteneurs.',
                'url' => 'https://docs.docker.com/desktop/release-notes/',
                'category' => 'DevOps',
                'date' => new \DateTime('2024-06-08'),
                'source' => 'Docker',
                'image' => null
            ]
        ];

        // Trier par date (plus récent en premier)
        usort($articles, function($a, $b) {
            return $b['date'] <=> $a['date'];
        });

        return array_slice($articles, 0, $limit);
    }

    /**
     * Récupère les articles par catégorie
     */
    public function getArticlesByCategory(string $category): array
    {
        $allArticles = $this->getLatestArticles(20); // Plus d'articles pour le filtrage
        
        if ($category === 'all') {
            return $allArticles;
        }

        return array_filter($allArticles, function($article) use ($category) {
            return $article['category'] === $category;
        });
    }

    /**
     * Récupère les 2 derniers articles par catégorie pour l'accueil
     */
    public function getLatestByAllCategories(): array
    {
        $categories = ['IA', 'Mobile', 'DevOps'];
        $result = [];

        foreach ($categories as $category) {
            $categoryArticles = $this->getArticlesByCategory($category);
            $result[$category] = array_slice($categoryArticles, 0, 2);
        }

        return $result;
    }

    /**
     * Récupère les 2 articles les plus récents toutes catégories confondues pour l'accueil
     */
    public function getLatestForHomePage(): array
    {
        return $this->getLatestArticles(2);
    }

    /**
     * Récupère un article par ID
     */
    public function getArticleById(int $id): ?array
    {
        $articles = $this->getLatestArticles(20);
        
        foreach ($articles as $article) {
            if ($article['id'] === $id) {
                return $article;
            }
        }

        return null;
    }

    /**
     * Récupère les statistiques par catégorie
     */
    public function getCategoryStats(): array
    {
        $articles = $this->getLatestArticles(20);
        $stats = [];

        foreach ($articles as $article) {
            $category = $article['category'];
            if (!isset($stats[$category])) {
                $stats[$category] = 0;
            }
            $stats[$category]++;
        }

        return $stats;
    }

    /**
     * Utilitaires pour l'affichage
     */
    public function getCategoryIcon(string $category): string
    {
        return match($category) {
            'IA' => 'fas fa-robot',
            'Mobile' => 'fas fa-mobile-alt',
            'DevOps' => 'fas fa-server',
            default => 'fas fa-newspaper'
        };
    }

    public function getCategoryColor(string $category): string
    {
        return match($category) {
            'IA' => '#e74c3c',
            'Mobile' => '#3498db',
            'DevOps' => '#2ecc71',
            default => '#95a5a6'
        };
    }

    public function formatDate(\DateTime $date): string
    {
        return $date->format('d/m/Y');
    }

    public function getShortDescription(string $description, int $length = 150): string
    {
        if (strlen($description) <= $length) {
            return $description;
        }
        
        return substr($description, 0, $length) . '...';
    }
} 