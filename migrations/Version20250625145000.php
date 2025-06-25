<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Migration pour créer la table articles de veille technologique
 */
final class Version20250625145000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Création de la table articles pour la veille technologique automatisée';
    }

    public function up(Schema $schema): void
    {
        // Création de la table articles (compatible SQLite)
        $this->addSql('CREATE TABLE articles (
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            url VARCHAR(500) NOT NULL,
            category VARCHAR(50) NOT NULL,
            published_at DATETIME NOT NULL,
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL,
            source VARCHAR(100) DEFAULT NULL,
            guid VARCHAR(255) NOT NULL UNIQUE,
            content TEXT DEFAULT NULL,
            image VARCHAR(500) DEFAULT NULL
        )');

        // Création des index séparément pour SQLite
        $this->addSql('CREATE INDEX idx_category ON articles (category)');
        $this->addSql('CREATE INDEX idx_published_at ON articles (published_at)');
    }

    public function down(Schema $schema): void
    {
        // Suppression de la table articles
        $this->addSql('DROP TABLE articles');
    }
} 