import React from 'react'
import MoviesCard from './MoviesCard'

import './css/Movies.css'

const Movies = ({result}) => {
    return (
        <div className="movies">
            {
                result.map((movie) => {
                    return <MoviesCard key={movie.id} {...movie}/>
                })
            }
        </div>
    )
}

export default Movies
