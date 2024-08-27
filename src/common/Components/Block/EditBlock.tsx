import React from "react";
import {BlockEditProps} from "@wordpress/blocks";
import {useBlockProps} from '@wordpress/block-editor';
import {useSelect, select} from "@wordpress/data";
import {useEntityProp} from "@wordpress/core-data";
import {InspectorControls} from '@wordpress/block-editor';
import Redactor from './Redactor';
import Panel from './Panel';


const EditBlock: React.FC<BlockEditProps<any>> = (props: BlockEditProps<any>) => {

    const blockName: string = useBlockProps()["data-type"]?.split("/")[1];

    const postType = useSelect(() => select("core/editor").getCurrentPostType(), []);

    const [meta, setMeta] = useEntityProp("postType", postType, "meta");

    const updatedProps: React.ComponentProps<any> = {
        ...props,
        ...{
            blockName: blockName,
            metaName: `_${blockName}`,
            meta: meta,
            updateMeta: (slug: string, value: any) => setMeta({...meta, [slug]: value}),
        },
    };

    return (
        <>
            <InspectorControls>
                <Panel {...updatedProps} />
            </InspectorControls>
            <div {...useBlockProps()}>
                <Redactor {...updatedProps} />
            </div>

        </>
    );
};

export default EditBlock;
