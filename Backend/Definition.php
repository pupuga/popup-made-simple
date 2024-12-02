<?php

namespace PopupMadeSimple\Backend;

if (!defined('ABSPATH')) exit;

final class Definition
{
    public static ?self $instance = null;
const POST_TYPE = 'popup-made-simple';
    const POST_TYPE_NAME_SINGLE = 'Popup';
    const POST_TYPE_NAME_MANY = 'Popups';
    const META_FIELDS = [
        '_popup_made_simple_page' => 'string',
        '_popup_made_simple_position' => 'string',
        '_popup_made_simple_animation' => 'string',
        '_popup_made_simple_window_width' => 'integer',
        '_popup_made_simple_window_border_radius' => 'integer',
        '_popup_made_simple_window_background_color' => 'string',
        '_popup_made_simple_appear_time' => 'integer',
        '_popup_made_simple_close' => 'boolean',
    ];
    const META_FIELD_PAGE = '_popup_made_simple_page';

    private ?string $rootPath;
    private ?string $rootUrl;

    public static function app(): self
    {
        return self::$instance = is_null(self::$instance)
            ? new self()
            : self::$instance;
    }

    public function getRootPath(string $partPath = ''): string
    {
        $partPath = trim($partPath, '/');

        return $this->rootPath . $partPath;
    }

    public function getRootUrl(string $partUrl = ''): string
    {
        $partUrl = trim($partUrl, '/');

        return $this->rootUrl . $partUrl;
    }

    private function __construct()
    {
        $this->setRootPath();
        $this->setRootUrl();
    }

    private function setRootPath(): void
    {
        $this->rootPath = plugin_dir_path(dirname(__FILE__));
    }

    private function setRootUrl(): void
    {
        $this->rootUrl = plugins_url('/' . self::POST_TYPE . '/', $this->rootPath);
    }
}