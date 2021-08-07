import React from 'react'
import MovieForm from './MovieForm'
import MoviesList from './MoviesList'
import MovieStats from './MovieStats'

import './css/MoviesContainer.css'

const MoviesContainer = (props) => {
    return (
        <div className="movies__container">
            <div className="movies__left">
                <MoviesList/>
            </div>
            <div className="movies__right">
                <MovieForm/>
                <MovieStats/>
            </div>
        </div>
    )
}

export default MoviesContainer
