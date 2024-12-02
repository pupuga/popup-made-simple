<?php

namespace PopupMadeSimple\Backend\Custom\PostType;

if (!defined('ABSPATH')) exit;

use PopupMadeSimple\Backend\Definition;

final class ScriptsStyles
{
    public static ?self $instance = null;

    public static function app(): self
    {
        return self::$instance = is_null(self::$instance)
            ? new self()
            : self::$instance;
    }

    private function __construct()
    {
        $this->addMainScriptAction();
    }

    private function addMainScriptAction(): void
    {
        add_action('enqueue_block_editor_assets', function () {
            $this->addStyle();
            $this->addScript();
        }, 10);
    }

    private function addStyle(): void
    {
        wp_enqueue_style(
            Definition::POST_TYPE . '-style',
            Definition::app()->getRootUrl('dist/admin/index.css'),
            [],
            filemtime(Definition::app()->getRootPath(Definition::POST_TYPE . '.php'))
        );
    }
    private function addScript(): void
    {
        wp_enqueue_script(
            Definition::POST_TYPE . '-script',
            Definition::app()->getRootUrl('dist/admin/index.js'),
            ['wp-plugins', 'wp-edit-post', 'wp-components', 'wp-data', 'wp-element'],
            filemtime(Definition::app()->getRootPath(Definition::POST_TYPE . '.php')),
            true
        );
    }
}
