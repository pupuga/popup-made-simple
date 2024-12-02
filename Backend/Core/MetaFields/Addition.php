<?php

namespace PopupMadeSimple\Backend\Core\MetaFields;

if (!defined('ABSPATH')) exit;

final class Addition
{
    private ?array $fields = null;

    private ?string $postType = null;

    public function __construct(array $fields, string $postType)
    {
        $this->setFields($fields);
        $this->setPostType($postType);
        $this->addActionRegisterFields();
        $this->updateFieldsAddAction();
    }

    private function setFields(array $fields): void
    {
        $this->fields = $fields;
    }

    private function setPostType(string $postType): void
    {
        $this->postType = $postType;
    }

    private function addActionRegisterFields(): void
    {
        add_action('init', function () {
            $this->registerFields();
        }, 100);
    }

    private function registerFields(): void
    {
        foreach ($this->fields as $name => $type) {
            register_post_meta($this->postType, $name, array(
                'show_in_rest' => true,
                'single' => true,
                'type' => $type,
                'auth_callback' => function () {
                    return current_user_can('edit_posts');
                }
            ));
        }
    }

    private function updateFieldsAddAction(): void
    {
        add_action("rest_after_insert_{$this->postType}", function ($post, $request, $creating) {
            $this->updateFields($post, $request, $creating);
        }, 10, 3);
    }

    private function updateFields(object $post, object $request, $creating): void
    {
        if ($this->postType === $post->post_type) {
            foreach ($this->fields as $name) {
                if (isset($request['meta'][$name])) {
                    update_post_meta($post->ID, $name, sanitize_text_field($request['meta'][$name]));
                }
            }
        }
    }
}
