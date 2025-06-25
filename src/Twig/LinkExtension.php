<?php

namespace App\Twig;

use App\Service\LinkService;
use Twig\Extension\AbstractExtension;
use Twig\Extension\GlobalsInterface;
use Twig\TwigFunction;

class LinkExtension extends AbstractExtension implements GlobalsInterface
{
    public function __construct(private LinkService $linkService)
    {
    }

    /**
     * Variables globales accessibles dans tous les templates
     */
    public function getGlobals(): array
    {
        return [
            'app_links' => $this->linkService->getAllLinks(),
            'social_links' => $this->linkService->getSocialLinks(),
            'cv_url' => $this->linkService->getCvUrl(),
            'contact_email' => $this->linkService->getEmail()
        ];
    }

    /**
     * Fonctions Twig personnalisées
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('get_social_link', [$this, 'getSocialLink']),
            new TwigFunction('has_social_link', [$this, 'hasSocialLink']),
            new TwigFunction('get_cv_url', [$this, 'getCvUrl']),
        ];
    }

    /**
     * Récupère un lien social spécifique
     */
    public function getSocialLink(string $platform): ?string
    {
        return $this->linkService->getSocialLink($platform);
    }

    /**
     * Vérifie si un lien social existe
     */
    public function hasSocialLink(string $platform): bool
    {
        return $this->linkService->hasSocialLink($platform);
    }

    /**
     * Récupère l'URL du CV
     */
    public function getCvUrl(): string
    {
        return $this->linkService->getCvUrl();
    }
} 