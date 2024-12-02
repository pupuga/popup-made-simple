<?php

namespace PopupMadeSimple\Backend\Custom\Posts;

if (!defined('ABSPATH')) exit;

use PopupMadeSimple\Backend\Definition;

final class PopupPosts
{
    private ?object $db = null;
    private ?string $sql = null;
    private array $ids = [];

    public function __construct(int $id)
    {
        $this->setDb();
        $this->setSql($id);
        $this->setIds();
    }

    public function getIds(): array
    {
        return $this->ids;
    }

    private function setDb(): void
    {
        global $wpdb;
        $this->db = $wpdb;
    }

    private function setSql(int $id): void
    {
        $postType = Definition::POST_TYPE;
        $field = Definition::META_FIELD_PAGE;
        $this->sql = $this->db->prepare(
            "
            SELECT pm.post_id AS id 
            FROM {$this->db->posts} AS p
            INNER JOIN {$this->db->postmeta} AS pm ON p.ID = pm.post_id
            WHERE p.post_type = %s
            AND p.post_status = 'publish'
            AND pm.meta_key = %s
            AND (pm.meta_value = %d OR pm.meta_value = 0 OR pm.meta_value = '')
            ",
            $postType,
            $field,
            $id
        );
    }

    private function setIds(): void
    {
        $ids = $this->db->get_results($this->sql, ARRAY_N);
        if (!empty($ids)) {
            foreach ($ids as $id) {
                $this->ids[] = $id[0];
            }
        }
    }
}