<?php

namespace PopupMadeSimple\Backend\Custom\PostType;

if (!defined('ABSPATH')) exit;

use PopupMadeSimple\Backend\Core\MetaFields\Addition;
use PopupMadeSimple\Backend\Definition;

final class MetaFieldsAddition
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
        $this->add();
    }

    private function add(): void
    {
        new Addition(
            Definition::META_FIELDS,
            Definition::POST_TYPE
        );
    }
}