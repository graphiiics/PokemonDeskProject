import React, { useState } from 'react';
import Headline from '../components/Header/Headline/Headline.component';
import SearchBar from '../components/Header/SearchBar/SearchBar.component';
import GridContainer from '../components/Grid/GridContainer.component';
import { useFetchPokemonList } from '../utils/hooks/useFetchPokedesk';


const Home = () => {
    const [ searchValue, setSearchValue ] = useState('')
    const { pokemonList, error, isLoading, filterItems } = useFetchPokemonList(searchValue);

    return (
        <div>
            <Headline title='P O K E M O M - D E S K' />
            <SearchBar searchValue={searchValue} setSearch={setSearchValue}/>
            <GridContainer pokemons={filterItems(pokemonList)} error={error} isLoading={isLoading} customMessage='Not Found!'/>
        </div>
    )
}

export default Home;
