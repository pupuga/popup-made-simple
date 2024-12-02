<?php

namespace PopupMadeSimple\Backend\Custom\Posts;

if (!defined('ABSPATH')) exit;

use PopupMadeSimple\Backend\Definition;

final class UserSide
{
    public static ?self $instance = null;
    private ?string $version = null;
    private array $data = [];
    private string $styleFilePath = 'dist/client/index.css';
    private string $scriptFilePath = 'dist/client/index.js';

    public static function app(): self
    {
        return self::$instance = is_null(self::$instance)
            ? new self()
            : self::$instance;
    }

    private function __construct()
    {
        $this->setVersion();
        $this->addModule();
    }

    private function setVersion(): void
    {
        $this->version = filemtime(Definition::app()->getRootPath(Definition::POST_TYPE . '.php'));
    }

    private function addModule(): void
    {
        if (Data::app()->getIsPost()) {
            $this->getData();
            if (count($this->data) > 0) {
                $this->addAssets();
            }
        }
    }

    private function getData(): void
    {
        foreach (Data::app()->get() as $value) {
            if (!isset($_COOKIE[Definition::POST_TYPE . '-' . $value['id'] . '-' . $value['date']])) {
                $this->data[] = $value;
            }
        }
    }

    private function addAssets(): void
    {
        $this->addFooter();
        $this->addScript();
    }

    private function addFooter(): void
    {
        add_action('wp_footer', function() {
            $this->addStyle();
        }, 10);
    }

    private function addStyle(): void
    {
        if(is_file(Definition::app()->getRootPath($this->styleFilePath))) {
            wp_enqueue_style(
                Definition::POST_TYPE,
                Definition::app()->getRootUrl($this->styleFilePath),
                [],
                $this->version
            );
        }
    }

    private function addScript(): void
    {
        if (is_file(Definition::app()->getRootPath($this->scriptFilePath))) {
            wp_enqueue_script(
                Definition::POST_TYPE,
                Definition::app()->getRootUrl($this->scriptFilePath),
                ['react', 'react-dom', 'react-jsx-runtime'],
                $this->version,
                true
            );
            wp_localize_script(Definition::POST_TYPE, 'SIMPLE_POP_UP_DATA', $this->data);
        }
    }
}
