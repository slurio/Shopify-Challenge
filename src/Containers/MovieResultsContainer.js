import React from 'react';
import styled from 'styled-components';
import Movie from '../Components/Movie';

// destructured props for results, error, clickHandler, searchTerm, and nominations 
function MovieResults({results, error, clickHandler, searchTerm, nominations}) {
    
    const renderMovieResults = () => {
        if (results) {
            // sort results by most recent year
            let sortedResults = results.sort(function(a, b) {
                return b['Year'] - a['Year']
            })
            
            return sortedResults.map(movie => {
                // if movie is nominated, pass favorite prop to Movie component 
                if (nominations.find(el => el['imdbID'] === movie['imdbID'])) {
                    return <Movie key={results.indexOf(movie)} favorite={true} movie={movie} clickHandler={clickHandler}/>
                } else {
                    return <Movie key={results.indexOf(movie)} movie={movie} clickHandler={clickHandler}/>
                }
            })
        } else {
            // if no movie results display error message
            if (error === 'Incorrect IMDb ID.') {
                return null
            } else {
                return <ErrorMessage>{error}</ErrorMessage>
            }
        }   
    }

    return(
        <ResultContainer>
            <ResultHeader>Results for '{searchTerm}'</ResultHeader>
            {renderMovieResults()}
        </ResultContainer>
    )
}

export default MovieResults;

const ResultContainer = styled.div`
    background-color: #fff;
    width: 50vw;
    height: 100%;
    margin-right: 10px;
    padding-bottom: 15px;
    border-radius: 2px;
    box-shadow: 0px 2px 4px 2px rgb(0,0,0,.15);
`

const ResultHeader = styled.header`
    padding: 20px;
    font-size: calc(3px + 2vmin);
    font-weight: bold;
`

const ErrorMessage = styled.p`
    margin: 10px 40px;   
`