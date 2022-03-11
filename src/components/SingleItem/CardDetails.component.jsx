import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { FavoritesContext } from '../../utils/contexts/FavoritesContext';
import './cardDetails.css'

const CardDetails = ({pokemon, error, isLoading }) => {
    const params = useParams();
    
    const { favorites, dispatch } = useContext(FavoritesContext);
    const handleAddFavorite = () => {
        dispatch({ 
            type: 'ADD_FAVORITE', 
            pokemon: { id: params.id, name: pokemon.name, img: pokemon.img }
        });
    }
    const handleRemoveFavorite = () => {
        dispatch({
            type: 'REMOVE_FAVORITE',
            id: params.id
        });
    }
    const handleIsFavorite = () => {
        return favorites.filter(pokemon => pokemon.id === params.id).length > 0;
    }
    let isFavorite = handleIsFavorite();

    if(isLoading){
        return <div className='container-grid'>
            <i className="fa fa-spinner fa-spin"></i> 
        </div>
    }
    if(error){
        return <>
           <p>Error</p> 
        </>
    }
    if(pokemon === 0){
        return <>
           <p>Not found</p> 
        </>
    }
    
    return (
        <div className="details-container">
            <div className="details" style={{ background: `radial-gradient(circle at 50% 0%, ${pokemon.color}, 46%, #ffffff 36%)`}}>
                <div className="pokemon-upper">
                    <div className='pokemon-fav'>
                        {(isFavorite)
                            ? <i className="fa fa-heart" onClick={handleRemoveFavorite}></i>
                            :<i className="fa fa-heart-o" onClick={handleAddFavorite}></i>
                        }
                    </div>
                    <p className="pokemon-hp">
                        <span>HP</span> {pokemon.hp}
                    </p>
                </div>
                
                <img src={pokemon.img} alt={pokemon.name}></img>
                <h2 className="pokemon-name" style={{textShadow: `3px 3px ${pokemon.color}`}}>{pokemon.name}</h2>
                <div className="pokemon-types">
                    {pokemon.types.map(type => <span key={type} style={{backgroundColor: pokemon.color}}>{type}</span>)}
                </div>
                <div className="pokemon-stats">
                    <div>
                        <h3>{pokemon.attack}</h3>
                        <p>Attack</p>
                    </div>
                    <div>
                        <h3>{pokemon.defense}</h3>
                        <p>Defence</p>
                    </div>
                    <div>
                        <h3>{pokemon.speed}</h3>
                        <p>Speed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails
