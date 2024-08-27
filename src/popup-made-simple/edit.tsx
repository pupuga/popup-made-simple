import './editor.scss';
import React from 'react';
import { BlockEditProps } from '@wordpress/blocks';
import EditBlock from '../common/Components/Block/EditBlock';


const Edit: React.FC<BlockEditProps<any>> = (props: BlockEditProps<any>) => {
    return <EditBlock { ...props } />;
};

export default Edit;
