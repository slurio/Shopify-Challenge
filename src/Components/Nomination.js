import React from 'react';
import styled from 'styled-components';
import bullet from '../images/bullet.svg';

// destructured movie and clickHandler
function Nomination({movie, clickHandler}){

    return(
      <NominationContainer>
          <BulletPoint src={bullet}/>
          <NominationMovie>
            {movie['Title']} ({movie['Year']}) <RemoveButton onClick={() => clickHandler(movie)}>Remove</RemoveButton> 
          </NominationMovie> 
      </NominationContainer>
    )
}

export default Nomination;

const NominationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0px 40px;    
`

const NominationMovie = styled.p`
    margin: 10px 4px;
  `
  
  const BulletPoint = styled.img`
    width: 1.5vw;
    height: 1.5vh;
  `

  const RemoveButton = styled.button`
    padding: 6px 12px;
    color: #fff;
    background-color: black;
    border: 1px solid black;
    border-radius: 3px;

    &:hover {
      color: #fff;
      background-color: grey;
      border: 1px solid grey;
      cursor: pointer;
    }
  `
