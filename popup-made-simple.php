<?php
/**
 * Plugin Name:       Popup made simple
 * Description:       The Popup made simple plugin helps you simply create a popup.
 * Requires at least: 6.7
 * Requires PHP:      8.3
 * Version:           1.5.0
 * Author:            Alex Shandor
 * License:           GPL-3.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       popup-made-simple
 *
 * @package CreatePlugin
 */


if (!defined('ABSPATH')) {
    exit;
} else {
    require_once __DIR__ . "/vendor/autoload.php";
    PopupMadeSimple\Backend\Init::app();
}