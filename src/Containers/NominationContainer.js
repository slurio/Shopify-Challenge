import React from 'react';
import styled from 'styled-components';
import Nomination from '../Components/Nomination';

// destructured nominations and clickHandler
function Nominations({nominations, clickHandler}) {
    
    // if nominations present render nominations
    const renderNominations = () => {
        return nominations ? 
        nominations.map(movie => <Nomination key={nominations.indexOf(movie)} movie={movie} clickHandler={clickHandler}/>) 
        : null
    }

    return(
        <NominationContainer>
            <NominationHeader>Nominations</NominationHeader>
            {renderNominations()}
        </NominationContainer>
    )
}

export default Nominations;

const NominationContainer = styled.div`
    background-color: #fff;
    width: 50vw;
    height: 50vh;
    margin-left: 10px;
    padding-bottom: 15px;
    border-radius: 2px;
    overflow: scroll;
    box-shadow: 0px 2px 4px 2px rgb(0,0,0,.15);
    @media (max-width: 480px) {
        margin: 0;
        width: 100%;
        height: 225px;
    }   
`

const NominationHeader = styled.header`
    padding: 20px;
    font-size: calc(3px + 2vmin);
    font-weight: bold;
`