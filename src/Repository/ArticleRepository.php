<?php

namespace App\Repository;

use App\Entity\Article;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Article>
 */
class ArticleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Article::class);
    }

    /**
     * Récupère les 2 derniers articles par catégorie
     */
    public function findLatestByCategory(string $category, int $limit = 2): array
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.category = :category')
            ->setParameter('category', $category)
            ->orderBy('a.publishedAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }

    /**
     * Récupère les 2 derniers articles de chaque catégorie
     */
    public function findLatestByAllCategories(int $limitPerCategory = 2): array
    {
        $categories = ['IA', 'Mobile', 'DevOps'];
        $articles = [];

        foreach ($categories as $category) {
            $categoryArticles = $this->findLatestByCategory($category, $limitPerCategory);
            $articles[$category] = $categoryArticles;
        }

        return $articles;
    }

    /**
     * Récupère tous les articles récents pour l'accueil (6 max)
     */
    public function findLatestForHome(int $limit = 6): array
    {
        return $this->createQueryBuilder('a')
            ->orderBy('a.publishedAt', 'DESC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }

    /**
     * Récupère tous les articles paginés avec filtrage par catégorie
     * Limite à 2 articles par catégorie pour l'affichage
     */
    public function findByCategory(?string $category = null): array
    {
        if ($category && $category !== 'all') {
            // Si une catégorie spécifique est demandée, limiter à 2
            return $this->createQueryBuilder('a')
                ->andWhere('a.category = :category')
                ->setParameter('category', $category)
                ->orderBy('a.publishedAt', 'DESC')
                ->setMaxResults(2)
                ->getQuery()
                ->getResult();
        }

        // Pour "all", récupérer 2 articles par catégorie
        $categories = ['IA', 'Mobile', 'DevOps'];
        $articles = [];

        foreach ($categories as $cat) {
            $categoryArticles = $this->createQueryBuilder('a')
                ->andWhere('a.category = :category')
                ->setParameter('category', $cat)
                ->orderBy('a.publishedAt', 'DESC')
                ->setMaxResults(2)
                ->getQuery()
                ->getResult();
            
            $articles = array_merge($articles, $categoryArticles);
        }

        // Trier tous les articles par date
        usort($articles, function($a, $b) {
            return $b->getPublishedAt() <=> $a->getPublishedAt();
        });

        return $articles;
    }

    /**
     * Trouve un article par son GUID (évite les doublons)
     */
    public function findByGuid(string $guid): ?Article
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.guid = :guid')
            ->setParameter('guid', $guid)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Compte les articles par catégorie
     */
    public function countByCategory(): array
    {
        $result = $this->createQueryBuilder('a')
            ->select('a.category, COUNT(a.id) as count')
            ->groupBy('a.category')
            ->getQuery()
            ->getResult();

        $counts = [];
        foreach ($result as $row) {
            $counts[$row['category']] = (int) $row['count'];
        }

        return $counts;
    }

    /**
     * Récupère les 2 articles les plus récents toutes catégories confondues pour l'accueil
     */
    public function findLatestForHomePage(): array
    {
        // Récupérer 1 article par catégorie, puis garder les 2 plus récents
        $categories = ['IA', 'Mobile', 'DevOps'];
        $articles = [];

        foreach ($categories as $category) {
            $latestArticle = $this->findLatestByCategory($category, 1);
            if (!empty($latestArticle)) {
                $articles[] = $latestArticle[0];
            }
        }

        // Trier par date pour l'affichage (plus récent en premier)
        usort($articles, function($a, $b) {
            return $b->getPublishedAt() <=> $a->getPublishedAt();
        });

        return array_slice($articles, 0, 2); // Max 2 pour l'accueil
    }

    /**
     * Nettoie les anciens articles (garde les 100 plus récents par catégorie)
     */
    public function cleanOldArticles(int $keepCount = 100): int
    {
        $categories = ['IA', 'Mobile', 'DevOps'];
        $deletedCount = 0;

        foreach ($categories as $category) {
            // Récupère les IDs des articles à garder
            $keepIds = $this->createQueryBuilder('a')
                ->select('a.id')
                ->andWhere('a.category = :category')
                ->setParameter('category', $category)
                ->orderBy('a.publishedAt', 'DESC')
                ->setMaxResults($keepCount)
                ->getQuery()
                ->getArrayResult();

            if (empty($keepIds)) {
                continue;
            }

            $keepIds = array_column($keepIds, 'id');

            // Supprime les articles anciens
            $deleted = $this->createQueryBuilder('a')
                ->delete()
                ->andWhere('a.category = :category')
                ->andWhere('a.id NOT IN (:keepIds)')
                ->setParameter('category', $category)
                ->setParameter('keepIds', $keepIds)
                ->getQuery()
                ->execute();

            $deletedCount += $deleted;
        }

        return $deletedCount;
    }
} 