import React, { useContext } from 'react'
import Headline from '../components/Header/Headline/Headline.component';
import GridContainer from '../components/Grid/GridContainer.component';
import { FavoritesContext } from '../utils/contexts/FavoritesContext';

const MyFavorites = () => {
    const { favorites } = useContext(FavoritesContext)
    return (
        <div>
            <Headline title='M Y - F A V O R I T E S' />
            <GridContainer pokemons={favorites} customMessage='Empty Desk!'/>
        </div>
    )
}

export default MyFavorites
