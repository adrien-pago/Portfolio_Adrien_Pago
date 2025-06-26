<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use App\Service\LinkService;
use App\Service\VeilleService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    public function __construct(
        private LinkService $linkService,
        private VeilleService $veilleService,
        private ArticleRepository $articleRepository
    ) {
    }

    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        // Récupérer les 2 derniers projets triés par date
        $allProjects = $this->getAllProjects();
        $latestProjects = array_slice($allProjects, 0, 2);

        // Récupérer les 2 derniers articles de veille (BDD ou simulés si vide)
        $latestArticles = $this->articleRepository->findLatestForHomePage();
        
        // Si pas d'articles en BDD, utiliser les articles simulés
        if (empty($latestArticles)) {
            $latestArticles = $this->veilleService->getLatestForHomePage();
        }

        return $this->render('home/index.html.twig', [
            'page_title' => 'Accueil',
            'latestProjects' => $latestProjects,
            'latestArticles' => $latestArticles,
            'links' => $this->linkService->getAllLinks()
        ]);
    }

    #[Route('/profile', name: 'app_profile')]
    public function profile(): Response
    {
        return $this->render('profile/index.html.twig', [
            'page_title' => 'Profil',
        ]);
    }

    #[Route('/projects', name: 'app_projects')]
    public function projects(): Response
    {
        // Tous les projets avec système de dates et catégories
        $projects = $this->getAllProjects();
        
        return $this->render('projects/index.html.twig', [
            'page_title' => 'Projets',
            'projects' => $projects
        ]);
    }

    #[Route('/project/{id}', name: 'app_project_show')]
    public function projectShow(int $id): Response
    {
        $projects = $this->getAllProjects();
        $project = null;
        
        // Trouver le projet par ID
        foreach ($projects as $p) {
            if ($p['id'] === $id) {
                $project = $p;
                break;
            }
        }
        
        if (!$project) {
            throw $this->createNotFoundException('Projet non trouvé');
        }
        
        // Charger les images de la galerie
        $project['gallery_images'] = $this->getProjectGalleryImages($project);

        return $this->render('projects/show.html.twig', [
            'page_title' => $project['title'],
            'project' => $project
        ]);
    }

    #[Route('/veille', name: 'app_veille')]
    public function veille(): Response
    {
        // Récupérer tous les articles de veille (BDD ou simulés si vide)
        $articles = $this->articleRepository->findByCategory();
        $categoryStats = $this->articleRepository->countByCategory();
        
        // Si pas d'articles en BDD, utiliser les articles simulés
        if (empty($articles)) {
            $articles = $this->veilleService->getLatestArticles(20);
            $categoryStats = $this->veilleService->getCategoryStats();
        }

        return $this->render('veille/index.html.twig', [
            'page_title' => 'Veille Technologique',
            'articles' => $articles,
            'category_stats' => $categoryStats,
        ]);
    }

    #[Route('/veille/{id}', name: 'app_veille_show')]
    public function veilleShow(int $id): Response
    {
        // Essayer d'abord de récupérer depuis la BDD
        $article = $this->articleRepository->find($id);
        
        // Si pas trouvé en BDD, utiliser les articles simulés
        if (!$article) {
            $simulatedArticle = $this->veilleService->getArticleById($id);
            if (!$simulatedArticle) {
                throw $this->createNotFoundException('Article de veille non trouvé');
            }
            
            return $this->render('veille/show.html.twig', [
                'page_title' => $simulatedArticle['title'],
                'veille' => $simulatedArticle
            ]);
        }

        return $this->render('veille/show.html.twig', [
            'page_title' => $article->getTitle(),
            'veille' => $article
        ]);
    }

    #[Route('/contact', name: 'app_contact')]
    public function contact(): Response
    {
        return $this->render('contact/index.html.twig', [
            'page_title' => 'Contact',
            'contact_info' => $this->linkService->getContactInfo(),
            'social_links' => $this->linkService->getSocialLinks()
        ]);
    }

    #[Route('/social-unavailable/{platform}', name: 'app_social_unavailable')]
    public function socialUnavailable(string $platform): Response
    {
        $platformNames = [
            'instagram' => 'Instagram',
            'twitter' => 'Twitter',
            'facebook' => 'Facebook'
        ];

        $platformName = $platformNames[$platform] ?? ucfirst($platform);

        return $this->render('social/unavailable.html.twig', [
            'page_title' => $platformName . ' - Non disponible',
            'platform' => $platform,
            'platform_name' => $platformName
        ]);
    }

    /**
     * Récupère tous les projets triés par date (plus récent en premier)
     */
    private function getAllProjects(): array
    {
        $projects = [
            [
                'id' => 1,
                'title' => 'Compte Rendu Médical',
                'slug' => 'CRM',
                'description' => 'Application de gestion de comptes rendus médicaux permettant aux professionnels de santé de créer, gérer et partager des rapports médicaux de manière sécurisée et efficace pour leurs clients.',
                'category' => 'web',
                'cover_image' => 'CRM-Cover.PNG',
                'demo_image' => 'Demo/Demo.PNG',
                'tags' => ['PHP', 'Symfony', 'MySQL', 'Bootstrap', 'JavaScript'],
                'github_url' => 'https://github.com/adrien-pago/Compte_Rendu_Medical',
                'demo_url' => null,
                'created_at' => new \DateTime('2025-01-01'),
                'featured' => true
            ],
            [
                'id' => 2,
                'title' => 'EventPro',
                'slug' => 'EventPro',
                'description' => 'Event Pro est une application web moderne et complète, développée avec le framework Symfony, conçue pour simplifier la gestion d\'événements professionnels. De la planification à la synchronisation avec des services externes comme Google Agenda, Event Pro centralise toutes les opérations pour une productivité maximale.',
                'category' => 'web',
                'cover_image' => 'EventPro-Cover.PNG',
                'demo_image' => 'Demo/Demo.PNG',
                'tags' => ['PHP', 'Symfony', 'MySQL', 'Bootstrap', 'JavaScript'],
                'github_url' => 'https://github.com/adrien-pago/Event_Pro',
                'demo_url' => null,
                'created_at' => new \DateTime('2025-06-15'),
                'featured' => true
            ],
            [
                'id' => 3,
                'title' => 'VacaMeet Web',
                'slug' => 'VacaMeetWeb',
                'description' => 'Vaca-Meet est une application web pour les gérants de campings et clubs de vacances, permettant de gérer efficacement leur planning d\'activités et leurs services. Le système est complété par une application mobile destinée aux vacanciers, leur offrant un accès facile aux activités, services proposés par le camping et pleins d\'autres options .....',
                'category' => 'web',
                'cover_image' => 'VacaMeetWeb-Cover.PNG',
                'demo_image' => 'Demo/Demo.PNG',
                'tags' => ['PHP', 'Symfony', 'MySQL', 'Bootstrap', 'JavaScript'],
                'github_url' => 'https://github.com/adrien-pago/Vaca_Meet_Web',
                'demo_url' => null,
                'created_at' => new \DateTime('2025-07-20'),
                'featured' => true
            ],
            [
                'id' => 4,
                'title' => 'VacaMeet Mobile',
                'slug' => 'VacaMeetMobile',
                'description' => 'Vaca Meet est une application mobile permettant aux utilisateurs de se connecter et d\'avoir connaissance de toutes les activités et plus du camping. Elle utilise une architecture moderne avec Flutter pour le frontend et une API RESTful Symfony pour le backend.',
                'category' => 'mobile',
                'cover_image' => 'VacaMeetWeb-Cover.PNG',
                'demo_image' => 'Demo/Demo.PNG',
                'tags' => ['React', 'Flutter', 'Symphony API','MySQL'],
                'github_url' => 'https://github.com/adrien-pago/Vaca_Meet_Flutter',
                'demo_url' => null,
                'created_at' => new \DateTime('2025-09-10'),
                'featured' => true
            ]
        ];

        // Trier par date (plus récent en premier)
        usort($projects, function($a, $b) {
            return $b['created_at'] <=> $a['created_at'];
        });

        return $projects;
    }

    /**
     * Récupère les images de la galerie d'un projet
     */
    private function getProjectGalleryImages(array $project): array
    {
        $galleryPath = $this->getParameter('kernel.project_dir') . '/public/uploads/projects/' . $project['id'] . '-' . $project['slug'] . '/gallery';
        $galleryImages = [];

        if (is_dir($galleryPath)) {
            $files = scandir($galleryPath);
            foreach ($files as $file) {
                if (in_array(pathinfo($file, PATHINFO_EXTENSION), ['jpg', 'jpeg', 'png', 'webp','PNG'])) {
                    $galleryImages[] = $file;
                }
            }
            // Trier par nom pour respecter l'ordre numérique
            sort($galleryImages);
        }

        return $galleryImages;
    }
} 