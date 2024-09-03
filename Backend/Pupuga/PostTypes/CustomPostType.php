<?php

namespace Pupuga\PostTypes;

use Pupuga\Core\Posts\PostType;

if (!defined('ABSPATH')) exit;

class CustomPostType extends AbstractCustomPostType
{
	private string $postType;

	public function __construct(string $postType, array $labels, array $args = [])
	{
		$this->postType = sanitize_key($postType === '' ? $labels['singular_name'] : $postType);
		$this->setLabels($this->defineLabels($labels));
	}

	protected function defineLabels(array $labels): array
	{
		$many = __($labels['many']);
		$single = __($labels['single']);
		return [
			'name'                     => $many,
			'singular_name'            => $single,
			'add_new'                  => __('Add New'),
			'add_new_item'             => __('Add New') . ' ' . $single,
			'edit_item'                => __('Edit') . ' ' . $single,
			'new_item'                 => __('New') . ' ' . $single,
			'view_item'                => __('View') . ' ' . $single,
			'view_items'               => __('View') . ' ' . $many,
			'search_items'             => __('Search') . ' ' . $many,
			'not_found'                => __('No') . ' ' . $single . ' ' . __('found'),
			'not_found_in_trash'       => __('No') . ' ' . $single . ' ' . __('found in Trash'),
			'parent_item_colon'        => __('Parent') . ' ' . $single . ':',
			'all_items'                => __('All') . ' ' . $many,
			'archives'                 => $single . ' ' . __('Archives'),
			'insert_into_item'         => __('Insert into') . ' ' . $single,
			'uploaded_to_this_item'    => __('Uploaded to this') . ' ' . $single,
			'featured_image'           => __('Featured Image'),
			'set_featured_image'       => __('Set featured image'),
			'remove_featured_image'    => __('Remove featured image'),
			'use_featured_image'       => __('Use as featured image'),
			'menu_name'                => $many,
			'filter_items_list'        => __('Filter') . ' ' . $many . ' ' . __('list'),
			'items_list_navigation'    => $many . ' ' . __('list navigation'),
			'items_list'               => $many . ' ' . __('list'),
			'name_admin_bar'           => $single,
			'item_published'           => $single . ' ' . __('published.'),
			'item_published_privately' => $single . ' ' . __('published privately.'),
			'item_reverted_to_draft'   => $single . ' ' . __('reverted to draft.'),
			'item_scheduled'           => $single . ' ' . __('scheduled.'),
			'item_updated'             => $single . ' ' . __('updated.'),
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
