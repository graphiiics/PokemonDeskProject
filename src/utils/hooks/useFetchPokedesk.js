import { useState, useEffect } from 'react'

export function useFetchPokemonList(searchText){
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonList, setPokemonList ] = useState([]);

    async function getData(){
        setIsLoading(true);
        try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=649');
            const data = await response.json();
            
            const pokemonsWithId = data.results.map((pokemon) => {
                let pokemonId = pokemon.url.split('/')[6];
                let svgImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
                return {
                    id: pokemonId,
                    name: pokemon.name,
                    img: svgImg
                }
            })
            setPokemonList(pokemonsWithId)
        }catch(error){
            console.log('Error fetch: ', error);
            setError(error);
        }
        setIsLoading(false);
    }

    function filterItems(pokemons){
        return pokemons.filter((pokemon) =>{
            return pokemon.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        });
    }

    useEffect(() => {
        getData();
    }, []);


    return {pokemonList, error, isLoading, filterItems }
}
