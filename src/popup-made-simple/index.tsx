import {registerBlockType, BlockConfiguration} from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';


const blockConfiguration: BlockConfiguration = {
    title: metadata.title,
    category: metadata.category,
    attributes: metadata.attributes,
    edit: Edit
}

registerBlockType(metadata.name, blockConfiguration);