<?php

namespace App\Twig;

use App\Service\VeilleService;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class VeilleExtension extends AbstractExtension
{
    public function __construct(private VeilleService $veilleService)
    {
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('veille_get_category_icon', [$this, 'getCategoryIcon']),
            new TwigFunction('veille_get_category_color', [$this, 'getCategoryColor']),
            new TwigFunction('veille_format_date', [$this, 'formatDate']),
            new TwigFunction('veille_get_short_description', [$this, 'getShortDescription']),
        ];
    }

    public function getCategoryIcon(string $category): string
    {
        return $this->veilleService->getCategoryIcon($category);
    }

    public function getCategoryColor(string $category): string
    {
        return $this->veilleService->getCategoryColor($category);
    }

    public function formatDate(\DateTime $date): string
    {
        return $this->veilleService->formatDate($date);
    }

    public function getShortDescription(string $description, int $length = 150): string
    {
        return $this->veilleService->getShortDescription($description, $length);
    }
} 