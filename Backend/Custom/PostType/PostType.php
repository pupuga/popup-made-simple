<?php

namespace PopupMadeSimple\Backend\Custom\PostType;

if (!defined('ABSPATH')) exit;

use PopupMadeSimple\Backend\Core\PostTypes\CustomPostType;
use PopupMadeSimple\Backend\Definition;

final class PostType
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
        $this->addPosType();
    }

    private function addPosType(): void
    {
        (new CustomPostType(Definition::POST_TYPE, Definition::POST_TYPE_NAME_SINGLE, Definition::POST_TYPE_NAME_MANY))
            ->setMenuIcon('dashicons-feedback')
            ->setParamsForHiddenMode()
            ->register();
    }
}