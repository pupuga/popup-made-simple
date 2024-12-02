<?php

namespace PopupMadeSimple\Backend\Custom\Posts;

if (!defined('ABSPATH')) exit;

final class Data
{
    public static ?self $instance = null;
    private int $id = 0;
    private array $ids = [];
    private bool $isPost = false;
    private array $data = [];

    public static function app(): self
    {
        return self::$instance = is_null(self::$instance)
            ? new self()
            : self::$instance;
    }

    public function get(): array
    {
        return $this->data;
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function getIsPost(): bool
    {
        return $this->isPost;
    }

    private function __construct()
    {
        $this->setId();
        $this->setIds();
        $this->setIsPost();
        $this->set();
    }

    private function setId(): void
    {
        $this->id = get_the_ID();
    }

    private function setIds(): void
    {
        $this->ids = (new PopupPosts($this->id))->getIds();
    }

    private function setIsPost(): void
    {
        $this->isPost = count($this->ids) > 0;
    }

    private function set(): void
    {
        if (!empty($this->ids)) {
            foreach ($this->ids as $id) {
                $post = get_post($id);
                $this->data[] = [
                    'id' => intval($id),
                    'content' => apply_filters('the_content', $post->post_content),
                    'date' => str_replace([":","-", " "], "", $post->post_modified),
                    'meta' => get_post_meta($id)
                ];
            }
        }
    }
}