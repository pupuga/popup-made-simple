<?php

namespace Pupuga\PostTypes;

class PostTypes
{
	public static self|null $instance = null;
	private array $postTypes = [];

	public static function app(): self
	{
		return self::$instance = is_null(self::$instance) ? new self() : self::$instance;
	}

	private function __construct()
	{
		add_action('after_setup_theme', array($this, 'registerPostTypesTaxonomies'));
	}

	public function registerPostTypesTaxonomies(): void
	{
	}
}
