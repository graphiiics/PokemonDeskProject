import { useState, useEffect } from 'react'

export function useFetchPokemonById(pokemonId){
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonItem, setPokemonItem ] = useState({});

    useEffect(() => {
        const typeColor = {
            bug: "#26de81",
            dragon: "#ffeaa7",
            electric: "#fed330",
            fairy: "#FF0069",
            fighting: "#30336b",
            fire: "#f0932b",
            flying: "#81ecec",
            grass: "#00b894",
            ground: "#EFB549",
            ghost: "#a55eea",
            ice: "#74b9ff",
            normal: "#95afc0",
            poison: "#6c5ce7",
            psychic: "#a29bfe",
            rock: "#2d3436",
            water: "#0190FF",
        };
        
        async function getData(){
            setIsLoading(true);
            try{
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const data = await response.json();
                //console.log('[DATA POKEMON]', data);

                const hp = data.stats[0].base_stat;
                const img = data.sprites.other.dream_world.front_default;
                const name = data.name[0].toUpperCase() + data.name.slice(1);
                const attack = data.stats[1].base_stat;
                const defense = data.stats[2].base_stat;
                const speed = data.stats[5].base_stat;
                const color = typeColor[data.types[0].type.name];
                const types = data.types.map(item => item.type.name);

                const pokemonDetails = {
                    hp,
                    img,
                    name,
                    attack,
                    defense,
                    speed,
                    color,
                    types
                }

                //console.log('[DETAILS]', pokemonDetails);
                
                setPokemonItem(pokemonDetails);
            }catch(error){
                console.log('Error fetch: ', error);
                setError(error);
            }
            setIsLoading(false);
        }
        getData();
    }, [pokemonId]);

    return {pokemonItem, error, isLoading }
}
