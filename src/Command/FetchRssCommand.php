<?php

namespace App\Command;

use App\Entity\Article;
use App\Repository\ArticleRepository;
use App\Service\RssService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:fetch-rss',
    description: 'Récupère les derniers articles RSS pour la veille technologique'
)]
class FetchRssCommand extends Command
{
    public function __construct(
        private RssService $rssService,
        private EntityManagerInterface $entityManager,
        private ArticleRepository $articleRepository
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addOption('category', 'c', InputOption::VALUE_OPTIONAL, 'Catégorie spécifique à récupérer (IA, Mobile, DevOps)')
            ->addOption('limit', 'l', InputOption::VALUE_OPTIONAL, 'Nombre max d\'articles par catégorie', 10)
            ->addOption('test', 't', InputOption::VALUE_NONE, 'Mode test - affiche les articles sans les sauvegarder')
            ->addOption('clean', null, InputOption::VALUE_NONE, 'Nettoie les anciens articles (garde les 100 plus récents par catégorie)')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        
        $io->title('🤖 Récupération des articles RSS - Veille Technologique');

        // Option de nettoyage
        if ($input->getOption('clean')) {
            $deletedCount = $this->articleRepository->cleanOldArticles(100);
            $io->success("Nettoyage terminé : {$deletedCount} anciens articles supprimés");
        }

        $category = $input->getOption('category');
        $limit = (int) $input->getOption('limit');
        $testMode = $input->getOption('test');

        if ($testMode) {
            $io->note('🧪 Mode TEST activé - aucun article ne sera sauvegardé');
        }

        $categories = $category ? [$category] : ['IA', 'Mobile', 'DevOps'];
        $totalProcessed = 0;
        $totalSaved = 0;
        $totalSkipped = 0;

        foreach ($categories as $cat) {
            $io->section("📡 Récupération catégorie : {$cat}");

            try {
                // Récupérer les articles RSS
                $articles = $this->rssService->fetchArticlesByCategory($cat);
                $processed = 0;
                $saved = 0;
                $skipped = 0;

                $io->progressStart(count($articles));

                foreach ($articles as $article) {
                    $processed++;
                    
                    if ($processed > $limit) {
                        break;
                    }

                    // Vérifier si l'article existe déjà
                    $existingArticle = $this->articleRepository->findByGuid($article->getGuid());
                    
                    if ($existingArticle) {
                        $skipped++;
                        $io->progressAdvance();
                        continue;
                    }

                    if (!$testMode) {
                        // Sauvegarder l'article
                        $this->entityManager->persist($article);
                        $saved++;
                    } else {
                        // Mode test : afficher les infos
                        $io->text([
                            "  📰 {$article->getTitle()}",
                            "  📅 {$article->getPublishedAt()->format('d/m/Y H:i')}",
                            "  🔗 {$article->getUrl()}",
                            "  ---"
                        ]);
                    }

                    $io->progressAdvance();
                }

                $io->progressFinish();

                if (!$testMode && $saved > 0) {
                    $this->entityManager->flush();
                }

                $totalProcessed += $processed;
                $totalSaved += $saved;
                $totalSkipped += $skipped;

                $io->text([
                    "✅ Traités: {$processed}",
                    "💾 Sauvegardés: {$saved}",
                    "⏭️ Ignorés (doublons): {$skipped}"
                ]);

            } catch (\Exception $e) {
                $io->error("Erreur lors du traitement de la catégorie {$cat}: " . $e->getMessage());
            }
        }

        // Résumé final
        $io->success([
            '🎉 Récupération RSS terminée !',
            "📊 Total traités: {$totalProcessed}",
            "💾 Total sauvegardés: {$totalSaved}",
            "⏭️ Total ignorés: {$totalSkipped}"
        ]);

        // Statistiques finales
        if (!$testMode) {
            $stats = $this->articleRepository->countByCategory();
            $io->section('📈 Statistiques des articles en base');
            
            foreach ($stats as $cat => $count) {
                $io->text("  {$cat}: {$count} articles");
            }
        }

        return Command::SUCCESS;
    }
} 