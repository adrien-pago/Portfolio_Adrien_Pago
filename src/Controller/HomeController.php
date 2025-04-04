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
        return $this->render('home/index.html.twig', [
            'page_title' => 'Accueil',
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

    #[Route('/veille', name: 'app_veille')]
    public function veille(): Response
    {
        return $this->render('veille/index.html.twig', [
            'page_title' => 'Veille Technologique',
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