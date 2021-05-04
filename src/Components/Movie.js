import React from 'react';
import styled from 'styled-components';
import bullet from '../images/bullet.svg';

// destructured props for movie, favorite, and clickHandler
function Movie({movie, favorite, clickHandler}){

    return(
      <MovieContainer>
        <BulletPoint src={bullet}/>
        <MovieResult>
          {`${movie['Title']} (${movie['Year']}) `}
          {favorite ? 
            <DeactivateButton>Nominate</DeactivateButton> 
            :<NominateButton onClick={() => clickHandler(movie)}>Nominate</NominateButton>
          }
        </MovieResult> 
      </MovieContainer>
    )
}

export default Movie;

  const MovieContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0px 40px;    
  `

  const MovieResult = styled.p`
    margin: 10px 4px;
  `

  const BulletPoint = styled.img`
    width: 1.5vw;
    height: 1.5vh;
  `

  const NominateButton = styled.button`
    padding: 6px 12px;
    color: #fff;
    background-color: #008060;
    border: 1px solid #008060;
    border-radius: 3px;

    &:hover {
      color: #fff;
      background-color: #5fbb64;
      border: 1px solid #5fbb64;
      cursor: pointer;
    }
  `

  const DeactivateButton = styled.button`
    padding: 6px 12px;
    color: #fff;
    background-color: #008060;
    index: 100;
    border: 1px solid #008060;
    opacity: 0.5;
    font-weight: bold;
    border-radius: 3px;
  `
