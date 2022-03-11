import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../../utils/contexts/FavoritesContext';
import './pokemonCard.css'

const PokemonCard = ({id, name, img}) => {
    const { favorites, dispatch } = useContext(FavoritesContext);
    const handleAddFavorite = () => {
        dispatch({ 
            type: 'ADD_FAVORITE', 
            pokemon: { id, name, img }
        });
    }
    const handleRemoveFavorite = () => {
        dispatch({
            type: 'REMOVE_FAVORITE',
            id: id
        });
    }
    const handleIsFavorite = () => {
        return favorites.filter(pokemon => pokemon.id === id).length > 0;
    }
    let isFavorite = handleIsFavorite();
    return (
        <div className="card-container">
            <div className="card">
                <div className="upper">
                    <div className='fav'>
                        {(isFavorite)
                            ? <i className="fa fa-heart" onClick={handleRemoveFavorite}></i>
                            :<i className="fa fa-heart-o" onClick={handleAddFavorite}></i>
                        }
                    </div>
                    <p className="hp">
                        <span> ID #{id} </span> 
                    </p>
                </div>
                <Link to={`/pokemon/${id}`}>
                    <img src={img} alt={name}></img>
                    <h2 className="poke-name">{ name[0].toUpperCase() + name.slice(1) }</h2>  
                </Link>
            </div>
        </div>
    )
}

export default PokemonCard
