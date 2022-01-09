import React from 'react'
import Headline from '../components/Header/Headline/Headline.component';
import Info from '../components/Info/Info.component';

const NotFound = () => {
    return (
        <div>
            <Headline title='N O T - F O U N D' />
            <Info title='Error 404!'/>
        </div>
    )
}

export default NotFound;
