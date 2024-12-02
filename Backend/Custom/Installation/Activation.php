<?php

namespace PopupMadeSimple\Backend\Custom\Installation;

if (!defined('ABSPATH')) exit;

use PopupMadeSimple\Backend\Definition;

final class Activation
{
    public static ?self $instance = null;
    /*private array $meta = [
        '_popup_made_simple_page' => '0',
        '_popup_made_simple_position' => 'center-center',
        '_popup_made_simple_animation' => 'fade',
        '_popup_made_simple_window_width' => 1024,
        '_popup_made_simple_window_border_radius' => 10,
        '_popup_made_simple_window_background_color' => '#ffffff',
        '_popup_made_simple_appear_time' => 0,
        '_popup_made_simple_close' => true,
    ];*/

    private array $post = [
        'post_title'    => 'Use of cookies',
        'post_content'  => '<!-- wp:paragraph --><p>This site uses cookies to provide you with a great user experience. By continuing to use this website, you consent to the use of cookies in accordance with our <a href="#page" data-type="internal" data-id="#page" target="_blank" rel="noreferrer noopener nofollow"><mark style="background-color:rgba(0, 0, 0, 0);color:#3a58c5" class="has-inline-color">privacy policy</mark></a>.</p><!-- /wp:paragraph --><!-- wp:buttons {"style":{"spacing":{"margin":{"top":"var:preset|spacing|10","bottom":"0"}}},"layout":{"type":"flex","justifyContent":"right","flexWrap":"nowrap"}} --><div class="wp-block-buttons" style="margin-top:var(--wp--preset--spacing--10);margin-bottom:0"><!-- wp:button {"width":100,"className":"is-style-fill accept-action"} --><div class="wp-block-button has-custom-width wp-block-button__width-100 is-style-fill accept-action"><a class="wp-block-button__link wp-element-button">Accept</a></div><!-- /wp:button --></div><!-- /wp:buttons -->',
        'post_status'   => 'draft',
        'post_type'     => Definition::POST_TYPE
    ];

    public static function app(): self
    {
        return self::$instance = is_null(self::$instance)
            ? new self()
            : self::$instance;
    }

    private function __construct()
    {
        wp_insert_post($this->post);
    }
}
