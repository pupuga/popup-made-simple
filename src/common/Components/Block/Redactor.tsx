import React, {Suspense, lazy, ComponentProps} from 'react';

let Component: null | React.FC = null;
const Redactor: React.FC<ComponentProps<any>> = (props) => {
    if (Component === null) {
        Component = lazy(() =>
            import( `../../../${props.blockName}/EditBlock/Redactor/Redactor` )
        );
    }

    return (
        <div className="blocks-redactor">
            <Suspense fallback={<div>Loading...</div>}>
                <Component {...props} />
            </Suspense>
        </div>
    );
}

export default Redactor;
