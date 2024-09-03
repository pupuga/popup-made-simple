<?php

namespace Pupuga\PostTypes;

if (!defined('ABSPATH')) exit;

abstract class AbstractCustomPostType
{
	protected array $args = [
		'labels'                => [],
		'description'           => '',
		'public'                => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'show_ui'               => true,
		'show_in_nav_menus'     => true,
		'show_in_menu'          => true,
		'show_in_admin_bar'     => true,
		'menu_position'         => 50,
		'menu_icon'             => 'dashicons-book',
		'capability_type'       => 'post',
		'capabilities'          => [],
		'map_meta_cap'          => true,
		'hierarchical'          => false,
		'supports'              => ['title', 'editor', 'thumbnail'],
		'register_meta_box_cb'  => null,
		'taxonomies'            => [],
		'has_archive'           => true,
		'rewrite'               => ['slug' => '', 'with_front' => true, 'pages' => true, 'feeds' => true],
		'query_var'             => '',
		'can_export'            => true,
		'delete_with_user'      => null,
		'show_in_rest'          => true,
		'rest_base'             => '',
		'rest_controller_class' => 'WP_REST_Posts_Controller'
	];

	public function setLabels(array $labels): self
	{
		$this->args['labels'] = $labels;
		return $this;
	}

	public function setDescription(string $description): self
	{
		$this->args['description'] = $description;
		return $this;
	}

	public function setPublic(bool $public): self
	{
		$this->args['public'] = $public;
		return $this;
	}

	public function setExcludeFromSearch(bool $excludeFromSearch): self
	{
		$this->args['exclude_from_search'] = $excludeFromSearch;
		return $this;
	}

	public function setPubliclyQueryable(bool $publiclyQueryable): self
	{
		$this->args['publicly_queryable'] = $publiclyQueryable;
		return $this;
	}

	public function setShowUi(bool $showUi): self
	{
		$this->args['show_ui'] = $showUi;
		return $this;
	}

	public function setShowInNavMenus(bool $showInNavMenus): self
	{
		$this->args['show_in_nav_menus'] = $showInNavMenus;
		return $this;
	}

	public function setShowInMenu(bool $showInMenu): self
	{
		$this->args['show_in_menu'] = $showInMenu;
		return $this;
	}

	public function setShowInAdminBar(bool $showInAdminBar): self
	{
		$this->args['show_in_admin_bar'] = $showInAdminBar;
		return $this;
	}

	public function setMenuPosition(int $menuPosition): self
	{
		$this->args['menu_position'] = $menuPosition;
		return $this;
	}

	public function setMenuIcon(string $menuIcon): self
	{
		$this->args['menu_icon'] = $menuIcon;
		return $this;
	}

	public function setCapabilityType(string $capabilityType): self
	{
		$this->args['capability_type'] = $capabilityType;
		return $this;
	}

	public function setCapabilities(array $capabilities): self
	{
		$this->args['capabilities'] = $capabilities;
		return $this;
	}

	public function setMapMetaCap(bool $mapMetaCap): self
	{
		$this->args['map_meta_cap'] = $mapMetaCap;
		return $this;
	}

	public function setHierarchical(bool $hierarchical): self
	{
		$this->args['hierarchical'] = $hierarchical;
		return $this;
	}

	public function setSupports(array $supports): self
	{
		$this->args['supports'] = $supports;
		return $this;
	}

	public function setRegisterMetaBoxCb(?callable $registerMetaBoxCb): self
	{
		$this->args['register_meta_box_cb'] = $registerMetaBoxCb;
		return $this;
	}

	public function setTaxonomies(array $taxonomies): self
	{
		$this->args['taxonomies'] = $taxonomies;
		return $this;
	}

	public function setHasArchive(bool $hasArchive): self
	{
		$this->args['has_archive'] = $hasArchive;
		return $this;
	}

	public function setRewrite(array $rewrite): self
	{
		$this->args['rewrite'] = $rewrite;
		return $this;
	}

	public function setQueryVar(string $queryVar): self
	{
		$this->args['query_var'] = $queryVar;
		return $this;
	}

	public function setCanExport(bool $canExport): self
	{
		$this->args['can_export'] = $canExport;
		return $this;
	}

	public function setDeleteWithUser(?bool $deleteWithUser): self
	{
		$this->args['delete_with_user'] = $deleteWithUser;
		return $this;
	}

	public function setShowInRest(bool $showInRest): self
	{
		$this->args['show_in_rest'] = $showInRest;
		return $this;
	}

	public function setRestBase(string $restBase): self
	{
		$this->args['rest_base'] = $restBase;
		return $this;
	}

	public function setRestControllerClass(string $restControllerClass): self
	{
		$this->args['rest_controller_class'] = $restControllerClass;
		return $this;
	}

	public function getArgs(): array
	{
		return $this->args;
	}
}
