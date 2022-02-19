import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal, modalState }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            closeModal();
        }, 3000);
        return () => clearTimeout(timeout);
    }, [modalState]);

    return (
        <div className='modal'>
            <p>{modalContent}</p>
        </div>
    );
};

export default Modal;
