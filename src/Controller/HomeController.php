<?php

namespace App\Controller;

use App\Service\LinkService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    public function __construct(private LinkService $linkService)
    {
    }

    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        // Récupérer les 2 derniers projets triés par date
        $allProjects = $this->getAllProjects();
        $latestProjects = array_slice($allProjects, 0, 2);

        // Données temporaires pour les articles de veille
        $latestArticles = [
            [
                'id' => 1,
                'title' => 'Les nouveautés de Symfony 6.4',
                'description' => 'Découvrez les nouvelles fonctionnalités de Symfony 6.4, notamment les améliorations de performance, les nouveaux composants et les changements majeurs.',
                'date' => new \DateTime('2024-04-01'),
                'category' => 'Framework'
            ],
            [
                'id' => 2,
                'title' => 'L\'avenir du développement web en 2024',
                'description' => 'Explorez les tendances émergentes du développement web, de l\'IA aux nouvelles architectures front-end, en passant par les frameworks modernes.',
                'date' => new \DateTime('2024-03-28'),
                'category' => 'Tendances'
            ]
        ];

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
        return $this->render('veille/index.html.twig', [
            'page_title' => 'Veille Technologique',
        ]);
    }

    #[Route('/veille/{id}', name: 'app_veille_show')]
    public function veilleShow(int $id): Response
    {
        // Données temporaires pour l'article de veille (à remplacer par une requête à la base de données plus tard)
        $veille = [
            'id' => $id,
            'title' => 'Article de veille ' . $id,
            'description' => 'Contenu détaillé de l\'article de veille...',
            'category' => 'Framework',
            'date' => new \DateTime('2024-01-01'),
            'sources' => [
                'https://source1.com',
                'https://source2.com'
            ]
        ];

        return $this->render('veille/show.html.twig', [
            'page_title' => $veille['title'],
            'veille' => $veille
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
                'title' => 'Portfolio Personnel',
                'slug' => 'portfolio-symfony',
                'description' => 'Portfolio personnel développé avec Symfony 7, intégrant une gestion de projets moderne, une veille technologique et une expérience mobile optimisée.',
                'category' => 'web',
                'cover_image' => 'cover.jpg',
                'tags' => ['Symfony', 'Twig', 'SCSS', 'JavaScript', 'Bootstrap'],
                'github_url' => 'https://github.com/adrien-pago/portfolio',
                'demo_url' => null,
                'created_at' => new \DateTime('2024-06-20'),
                'featured' => true
            ]
            // Ici tu pourras ajouter tes vrais projets
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
                if (in_array(pathinfo($file, PATHINFO_EXTENSION), ['jpg', 'jpeg', 'png', 'webp'])) {
                    $galleryImages[] = $file;
                }
            }
            // Trier par nom pour respecter l'ordre numérique
            sort($galleryImages);
        }

        return $galleryImages;
    }
} 