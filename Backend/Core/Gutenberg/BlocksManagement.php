<?php

namespace PopupMadeSimple\Backend\Core\Gutenberg;

if (!defined('ABSPATH')) exit;

final class BlocksManagement
{
    private ?string $postType;

    private array $blocks = [];

    public function __construct(string $postType)
    {
        $this->postType = $postType;
    }

    public function setBlocks(array $blocks): self
    {
        $this->blocks = $blocks;
        return $this;
    }

    public function addFilter(): void
    {
        add_filter('allowed_block_types',
            function (array|bool $blocks, object $post) {
                return $this->addBlocks($blocks, $post);
            },
        10, 2);
    }

    private function addBlocks(array|bool $blocks, object $post): array|bool
    {
        if ($this->postType === $post->post_type) {
            $blocks = $this->blocks;
        }

        return $blocks;
    }
}
