import React from 'react'
import { Link } from 'react-router-dom'
import Headline from '../components/Header/Headline/Headline.component';
import GridCardDetail from '../components/SingleItem/GridCardDetail.component';

const SingleItem = () => {
    

    return (
        <div>
            <Link to='/'><Headline title='P O K E M O M - D E S K' /></Link>
            <GridCardDetail/>
        </div>
    )
}

export default SingleItem
