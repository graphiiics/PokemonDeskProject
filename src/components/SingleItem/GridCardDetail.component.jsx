import React  from 'react'
import { Link, useParams } from 'react-router-dom'
import './gridCardDetail.css'
import CardDetails from './CardDetails.component'
import { useFetchPokemonById } from '../../utils/hooks/useFetchPokemonById';

const GridCardDetail = () => {
    const params = useParams();
    const { pokemonItem, error, isLoading } = useFetchPokemonById(params.id);
    const backURL = `/pokemon/${Number(params.id) - 1}`;
    const nextURL = `/pokemon/${Number(params.id) + 1}`;

    return (
        <div className='grid-section'>
            <div className='grid-nav'>
                { Number(params.id) - 1 > 0 &&
                    <Link to={backURL}>
                        <i className="fa fa-chevron-circle-left"></i>
                    </Link>
                }
            </div>
            <div className='grid-main'>
                <CardDetails pokemonId={params.id} pokemon={pokemonItem} error={error} isLoading={isLoading}/>
            </div>
            <div className='grid-nav'>
            { Number(params.id) + 1 < 650 &&
                <Link to={nextURL}>
                    <i className="fa fa-chevron-circle-right"></i>
                </Link>
            }
            </div>
        </div>
    )
}

export default GridCardDetail;
