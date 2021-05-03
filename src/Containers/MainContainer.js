import React from 'react';
import styled from 'styled-components';
import MovieResults from './MovieResultsContainer';
import Nominations from './NominationContainer';
import logo from '../images/logo.gif';
import envelope from '../images/envelope.gif';
import search from '../images/search.svg';
import { API_KEY } from '../environment';

const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&type=movie&s=`

class Main extends React.Component {

    state = {
        searchTerm: '',
        error: '',
        results: [],
        nominations: [],
        nominationLimit: false,
    }

    // sets searchTerm state to the input value and calls fetchResults function to get API results
    //check
    renderSearchTerm = (e) => {
        this.setState({
            searchTerm: e.target.value
        })

        this.fetchResults(e.target.value)
    }

    // makes fetch request to API and returns search results
    fetchResults = term => {
        fetch(BASE_URL + term)
        .then(resp => resp.json())
        .then(searchResults => {
            this.renderResults(searchResults)
        })
    }

    // if search results is an error, set error state to that error message and display it
    // else set results state to the movie results and display it
    renderResults = (movieResults) => {
        movieResults.Error ?
            this.setState({
                error: movieResults.Error,
                results: null
            })
        : this.setState({
            error: null,
            results: movieResults['Search']
        })
    }

    // adds movie to nominations and updates its state
    addNominationClickHandler = (movie) => {
            let updatedNominations = [...this.state.nominations];

            if (this.state.nominations.length !== 5) {
                updatedNominations.push(movie)
                this.setState({
                    nominations: updatedNominations
                })
            } else if (this.state.nominations.length === 5) {
                this.setState({ nominationLimit: true });
                let modal = document.querySelector('.nominationModal');
                modal.style.display = 'flex';
            }
    }

    // removes given movie from nomination and updates its state
    removeNominationClickHandler = (movie) => {
        let updateNominations = [...this.state.nominations]
        let foundObj = updateNominations.find(nomination => nomination === movie)
        let index = updateNominations.indexOf(foundObj)
        updateNominations.splice(index, 1)
        this.setState({
            nominations: updateNominations
        })
    }

    closeModal = () => {
        this.setState({ nominationLimit: false });
        let modal = document.querySelector('.nominationModal')
        modal.style.display = 'none';
    }

    render() {
        return(
            <>
                {this.state.nominationLimit ? <div style={{backgroundColor: '#fff', opacity: '0.7', position: 'absolute', zIndex: '1', width: '100vw', height: '200vh'}}></div> : null}
                <Modal className='nominationModal' style={{display: 'none'}}>
                    <Logo src={logo}/>
                    <h3>You have no more nominations left.</h3>
                    <CloseButton onClick={this.closeModal}>ok</CloseButton>
                </Modal>
                {this.state.nominations.length === 5 ?
                <Banner>
                    <Envelope src={envelope}/>
                    <Nomination>NOMINATIONS FILLED!</Nomination> 
                </Banner> 
                : null}

                <Container>  
                    <HeaderContainer>
                        <Title>The Shoppies</Title>
                    </HeaderContainer>

                    <SearchContainer>
                        <SearchHeader>Movie title</SearchHeader>
                        <SearchIcon src={search}/>
                        <SearchBar value={this.state.searchTerm} onChange={this.renderSearchTerm}></SearchBar>
                    </SearchContainer>

                    <DataContainer>
                        <MovieResults results={this.state.results} error={this.state.error} searchTerm={this.state.searchTerm} nominations={this.state.nominations} clickHandler={this.addNominationClickHandler}/>
                        <Nominations nominations={this.state.nominations} clickHandler={this.removeNominationClickHandler}/>
                    </DataContainer>
                </Container>
            </>
        )
    }
}

export default Main;

const Banner = styled.div`
    display: flex;
    font-weight: bold;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-item: center;
    background-color: #008060;
    letter-spacing: 3px;
    height: 8vh;
`

const Envelope = styled.img`
    width: 5vw;
    height: 6vh;
`

const Nomination = styled.p`
    color: #fff;
`

const Container =  styled.div`
    margin: 35px 200px;
    @media (max-width: 768px) {
        margin: 20px 30px;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin-bottom: 10px;
`

const Title = styled.h1`
    margin: 0px;
    color: white;
`

const Logo = styled.img`
    width: 6vw;
    height: 7vh;
    margin: 0px;
  `

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #fff;
    padding: 20px;
    border-radius: 2px;
    box-shadow: 0px 2px 4px 2px rgb(0,0,0,.15);
`

const SearchIcon = styled.img`
    width: 4vw;
    height: 4vh;
    padding-top: 27px;
    position: absolute; 
    zIndex: 1px;
`

const SearchHeader = styled.p`
    margin: 0px;
    padding-bottom: 5px;
    font-size: 14px;
`

const SearchBar = styled.input`
    height: 4vh;
    border: 1px solid lightgrey;
    padding-left: 40px;
`

const DataContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0px;
`

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
    background-color: #008060;
    width: 450px;
    height: auto;
    z-index: 2;
    padding: 20px;
    color: white;
`

const CloseButton = styled.button`
    padding: 6px 12px;
    color: #ffffff;
    background-color: #212326;
    border: 1px solid #212326;
    border-radius: 3px;
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
        color: #fff;
        background-color: black;
        border: 1px solid black;
        cursor: pointer;
    }
`
