import React from 'react';
import './gridContainer.css';
import PokemonCard from './PokemonCard.component';

const GridContainer = ({pokemons = [], error, isLoading, customMessage}) => {
    if(isLoading){
        return <div className='container-grid'>
            <i className="fa fa-spinner fa-spin"></i> 
        </div>
    }
    if(error){
        <div className='container-grid'>
            <p className='container-message'>Error</p> 
        </div>
    }
    if(pokemons.length === 0){
        return <div className='container-grid'>
           <p className='container-message'>{customMessage}</p> 
        </div>
    }

    const pokemonsItems = pokemons.map(({id, name, img}) =>{
        return  <div className="grid-item" key={id}>
                    <PokemonCard
                        id={id} 
                        name={name}
                        img={img} 
                    />
                </div>
    })
    return (
        <div className="grid-container">
            {pokemonsItems}
        </div>
    )
}

export default GridContainer;
