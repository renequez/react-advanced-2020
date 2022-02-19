import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
    const [text, setText] = useState('');
    const [isError, setIsError] = useState(false);

    // const firstValue = text || 'hello world';
    // const secondValue = text && 'hello world';

    return (
        <>
            <h1>{text || 'john doe'} </h1>
            <button className='btn' onClick={() => setIsError(!isError)}>
                toggle error
            </button>
            <h1>{isError && 'error...'} </h1>
            {isError ? <p>another error...</p> : <p>there is no error</p>}
        </>
    );
};

export default ShortCircuit;
