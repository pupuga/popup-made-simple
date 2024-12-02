<?php

namespace PopupMadeSimple\Backend;

if (!defined('ABSPATH')) exit;

use PopupMadeSimple\Backend\Definition;
use PopupMadeSimple\Backend\Custom\Installation\Activation;
use PopupMadeSimple\Backend\Custom\PostType\{PostType, BlocksConfig, ScriptsStyles, MetaFieldsAddition};
use PopupMadeSimple\Backend\Custom\Posts\UserSide;


final class Init
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
        register_activation_hook(Definition::app()->getRootPath() . Definition::POST_TYPE . '.php', function () {
            Activation::app();
        });

        add_action('init', function () {
            $this->init();
        }, 10);
     
        add_action('admin_init', function () {
            $this->adminInit();
        }, 10);

        add_action('template_redirect', function () {
            $this->userInit();
        }, 10);
    }

    private function init(): void
    {
        Definition::app();
        PostType::app();
        BlocksConfig::app();
        MetaFieldsAddition::app();
    }

    private function adminInit(): void
    {
        ScriptsStyles::app();
    }

    private function userInit(): void
    {
        UserSide::app();
    }

}
