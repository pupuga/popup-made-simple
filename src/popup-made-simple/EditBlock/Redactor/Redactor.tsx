import React, {ComponentProps, useEffect} from 'react';

interface RedactorProps {
    attributes: Record<string, any>;
}

const Redactor: React.FC<RedactorProps> = ({attributes}) => {

    useEffect(() => {
    }, [attributes]);

    return (
        <div>
            Static sample text
        </div>
    );
}
export default Redactor;
