<?php
/**
 * Plugin Name:       Popup made simple
 * Description:       The Popup made simple plugin helps you simply create a popup.
 * Requires at least: 6.6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Alex Shandor
 * License:           GPL-3.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       popup-made-simple
 *
 * @package CreatePlugin
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
} else {
	add_action('init', function () {
		require_once __DIR__ . "/vendor/autoload.php";
		PopupMadeSimple\Blocks\Blocks::app();
	}, 10000);
}
