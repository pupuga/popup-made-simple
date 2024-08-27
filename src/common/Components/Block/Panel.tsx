import React, {Suspense, lazy} from 'react';
import {__} from '@wordpress/i18n';
import {PanelBody, PanelRow} from '@wordpress/components';

interface Field {
    slug: string;
    title: string;
    Component?: React.FC<any>;

    [key: string]: any;
}

interface PanelProps {
    blockName: string;
    fields: Field[];
    metaName: string;

    [key: string]: any;
}

let Component: React.FC<any> | null = null;
let updatedFields: Field[] | null = null;

const Panel: React.FC<PanelProps> = (props) => {
    if (Component === null) {
        Component = lazy(() => import(`../../../${props.blockName}/EditBlock/Panel/Panel`));
    }

    if (updatedFields === null) {
        updatedFields = props?.fields === undefined
            ? []
            : props.fields.map((field: Field) => {
            const slug = field.slug.charAt(0).toUpperCase() + field.slug.slice(1);
            return {
                ...field,
                Component: lazy(() =>
                    import(`../../${props.blockName}/EditBlock/Panel/${slug}`)
                )
            };
        });
    }

    return (
        <div className="blocks-panel">
            {Component === null ? "" :
                <Suspense fallback={<div>Loading...</div>}>
                    <Component {...props} />
                </Suspense>
            }
            {updatedFields.map((field, index) => {
                const FieldComponent: React.FC<any> = field.Component!;

                return (
                    <Suspense key={index} fallback={<div>Loading...</div>}>
                        <PanelBody title={__(field.title)}>
                            <PanelRow>
                                <FieldComponent
                                    {...{...props, metaFieldName: `${props.metaName}_${field.slug}`}}
                                />
                            </PanelRow>
                        </PanelBody>
                    </Suspense>
                );
            })}
        </div>
    );
};

export default Panel;