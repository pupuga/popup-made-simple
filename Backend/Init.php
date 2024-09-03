<?php

namespace PopupMadeSimple\Backend;

use PopupMadeSimple\Backend\Blocks\Blocks;
use Pupuga\PostTypes\CustomPostType;

final class Init
{
	public static self|null $instance = null;

	public static function app(): self
	{
		return self::$instance = is_null(self::$instance) ? new self() : self::$instance;
	}

	private function __construct()
	{
		Blocks::app();
		(new CustomPostType('custom-test', array('single' => 'Test', 'many' => 'Test')))
			->setSupports(['title', 'editor'])
			->register();
	}
}
