import * as React from 'react'

import Test from './Test';


interface IProps {
    text: string;
    size: number;
}

const SampleComponent = (props: IProps) => {
    const { text, size } = props;

    return (
        <>
            { text }
            <Test size={size} />
        </>
    )
}

export default SampleComponent