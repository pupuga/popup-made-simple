<?php

namespace PopupMadeSimple\Backend\Core\PostTypes;

if (!defined('ABSPATH')) exit;

class CustomPostType extends AbstractCustomPostType
{
    private string $single;
    private string $many;
    private string $postType;

    public function __construct(string $postType, string $single, string $many)
    {
        $this->setPostType($postType);
        $this->setSingle($single);
        $this->setMany($many);
        $this->setLabels($this->defineLabels());
        parent::__construct(str_replace('_', '-', $this->postType));
    }

    protected function setSingle(string $single): self
    {
        $this->single = $single;
        return $this;
    }

    protected function setMany(string $many): self
    {
        $this->many = $many;
        return $this;
    }

    protected function setPostType(string $postType): self
    {
        $this->postType = sanitize_title($postType === '' ? $this->single : $postType);
        return $this;
    }

    protected function defineLabels(): array
    {
        return [
            'name' => $this->many,
            'singular_name' => $this->single,
            'add_new' => __('Add New', 'popup-made-simple'),
            'add_new_item' => __('Add New', 'popup-made-simple') . ' ' . $this->single,
            'edit_item' => __('Edit', 'popup-made-simple') . ' ' . $this->single,
            'new_item' => __('New', 'popup-made-simple') . ' ' . $this->single,
            'view_item' => __('View', 'popup-made-simple') . ' ' . $this->single,
            'view_items' => __('View', 'popup-made-simple') . ' ' . $this->many,
            'search_items' => __('Search', 'popup-made-simple') . ' ' . $this->many,
            'not_found' => __('No', 'popup-made-simple') . ' ' . $this->single . ' ' . __('found', 'popup-made-simple'),
            'not_found_in_trash' => __('No', 'popup-made-simple') . ' ' . $this->single . ' ' . __('found in Trash', 'popup-made-simple'),
            'parent_item_colon' => __('Parent', 'popup-made-simple') . ' ' . $this->single . ':',
            'all_items' => __('All', 'popup-made-simple') . ' ' . $this->many,
            'archives' => $this->single . ' ' . __('Archives', 'popup-made-simple'),
            'insert_into_item' => __('Insert into', 'popup-made-simple') . ' ' . $this->single,
            'uploaded_to_this_item' => __('Uploaded to this', 'popup-made-simple') . ' ' . $this->single,
            'featured_image' => __('Featured Image', 'popup-made-simple'),
            'set_featured_image' => __('Set featured image', 'popup-made-simple'),
            'remove_featured_image' => __('Remove featured image', 'popup-made-simple'),
            'use_featured_image' => __('Use as featured image', 'popup-made-simple'),
            'menu_name' => $this->many,
            'filter_items_list' => __('Filter', 'popup-made-simple') . ' ' . $this->many . ' ' . __('list', 'popup-made-simple'),
            'items_list_navigation' => $this->many . ' ' . __('list navigation', 'popup-made-simple'),
            'items_list' => $this->many . ' ' . __('list', 'popup-made-simple'),
            'name_admin_bar' => $this->single,
            'item_published' => $this->single . ' ' . __('published', 'popup-made-simple'),
            'item_published_privately' => $this->single . ' ' . __('published privately', 'popup-made-simple'),
            'item_reverted_to_draft' => $this->single . ' ' . __('reverted to draft', 'popup-made-simple'),
            'item_scheduled' => $this->single . ' ' . __('scheduled', 'popup-made-simple'),
            'item_updated' => $this->single . ' ' . __('updated', 'popup-made-simple'),
        ];
    }

    public function register(bool $useAction = false): void
    {
        if ($useAction) {
            add_action('init', function () {
                register_post_type($this->postType, $this->args);
            });
        } else {
            register_post_type($this->postType, $this->args);
        }
    }
}
