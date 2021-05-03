import React from 'react';
import styled from 'styled-components';

function NominationLimitModal(props) {

    const closeModal = () => {
        let modal = document.querySelector('.test')
        props.closeModal(modal)
    }

    return(
        <Modal className='test'>
            <h3>You have no more nominations left.</h3>
            <button onClick={closeModal}>ok</button>
        </Modal>
    )
}

export default NominationLimitModal;

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 450px;
    height: auto;
`