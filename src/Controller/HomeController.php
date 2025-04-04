<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        // Données temporaires pour les projets
        $latestProjects = [
            [
                'id' => 1,
                'title' => 'Portfolio Symfony',
                'description' => 'Portfolio personnel développé avec Symfony 6, intégrant une gestion de projets et une veille technologique.',
                'image' => 'portfolio.jpg',
                'tags' => ['Symfony', 'Twig', 'SCSS', 'JavaScript']
            ],
            [
                'id' => 2,
                'title' => 'Application E-commerce',
                'description' => 'Site e-commerce complet avec gestion des produits, panier, paiement et espace administrateur.',
                'image' => 'ecommerce.jpg',
                'tags' => ['PHP', 'MySQL', 'Bootstrap', 'jQuery']
            ]
        ];

        // Données temporaires pour la veille
        $latestVeille = [
            'id' => 1,
            'title' => 'Les nouveautés de Symfony 6.4',
            'description' => 'Découvrez les nouvelles fonctionnalités de Symfony 6.4, notamment les améliorations de performance, les nouveaux composants et les changements majeurs.',
            'date' => new \DateTime('2024-04-01'),
            'category' => 'Framework'
        ];

        return $this->render('home/index.html.twig', [
            'page_title' => 'Accueil',
            'latestProjects' => $latestProjects,
            'latestVeille' => $latestVeille
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
        return $this->render('projects/index.html.twig', [
            'page_title' => 'Projets',
        ]);
    }

    #[Route('/project/{id}', name: 'app_project_show')]
    public function projectShow(int $id): Response
    {
        // Données temporaires pour le projet (à remplacer par une requête à la base de données plus tard)
        $project = [
            'id' => $id,
            'title' => 'Projet ' . $id,
            'description' => 'Description détaillée du projet...',
            'image' => 'project' . $id . '.jpg',
            'tags' => ['PHP', 'Symfony', 'JavaScript'],
            'github_url' => 'https://github.com/username/project' . $id,
            'demo_url' => 'https://demo.project' . $id . '.com',
            'created_at' => new \DateTime('2024-01-01')
        ];

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
        ]);
    }
} 