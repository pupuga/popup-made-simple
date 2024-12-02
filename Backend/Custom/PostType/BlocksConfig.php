<?php

namespace PopupMadeSimple\Backend\Custom\PostType;

if (!defined('ABSPATH')) exit;

use PopupMadeSimple\Backend\Core\Gutenberg\BlocksManagement;
use PopupMadeSimple\Backend\Definition;

final class BlocksConfig
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
        $this->setBlocks();
    }

    private function setBlocks(): void
    {
        (new BlocksManagement(Definition::POST_TYPE))
            ->setBlocks([
                'core/paragraph',
                'core/heading',
                'core/list',
                'core/quote',
                'core/code',
                'core/details',
                'core/preformatted',
                'core/pullquote',
                'core/table',

                'core/image',
                'core/gallery',
                'core/cover',
                'core/file',
                'core/media-text',
                'core/video',

                'core/buttons',
                'core/columns',
                'core/group',
                'core/row',
                'core/stack',
                'core/grid',
                'core/separator',

                'core/html',
                'core/shortcode'
            ])
            ->addFilter();
    }
}
