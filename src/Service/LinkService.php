<?php

namespace App\Service;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class LinkService
{
    private array $links;

    public function __construct(ParameterBagInterface $parameterBag)
    {
        $this->links = $parameterBag->get('app.links');
    }

    /**
     * Récupère tous les liens sociaux
     */
    public function getSocialLinks(): array
    {
        return $this->links['social'] ?? [];
    }

    /**
     * Récupère un lien social spécifique
     */
    public function getSocialLink(string $platform): ?string
    {
        return $this->links['social'][$platform] ?? null;
    }

    /**
     * Récupère les liens de documents
     */
    public function getDocumentLinks(): array
    {
        return $this->links['documents'] ?? [];
    }

    /**
     * Récupère l'URL du CV
     */
    public function getCvUrl(): string
    {
        return $this->links['documents']['cv_url'] ?? '/CV.pdf';
    }

    /**
     * Récupère les informations de contact
     */
    public function getContactInfo(): array
    {
        return $this->links['contact'] ?? [];
    }

    /**
     * Récupère l'email de contact
     */
    public function getEmail(): ?string
    {
        return $this->links['contact']['email'] ?? null;
    }

    /**
     * Récupère les liens internes (routes)
     */
    public function getInternalLinks(): array
    {
        return $this->links['internal'] ?? [];
    }

    /**
     * Récupère tous les liens
     */
    public function getAllLinks(): array
    {
        return $this->links;
    }

    /**
     * Vérifie si un lien social existe
     */
    public function hasSocialLink(string $platform): bool
    {
        return isset($this->links['social'][$platform]) && 
               !empty($this->links['social'][$platform]);
    }
} 