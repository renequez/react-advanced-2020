import React, { useState } from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'peter',
        age: 24,
        message: 'sup yo',
    });

    const [name, setName] = useState('peter');
    const [age, setAge] = useState(24);
    const [message, setMessage] = useState('random message');

    const changeMessage = () => {
        setMessage('hellooooo');
    };

    return (
        <>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button className='btn' onClick={changeMessage}>
                change message
            </button>
        </>
    );
};

export default UseStateObject;
