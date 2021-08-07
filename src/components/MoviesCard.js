import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

import './css/MoviesCard.css'
import { useDispatch } from 'react-redux'
import { removeMovie } from '../action/movieAction'


const MoviesCard = ({id, movieName, ranking}) => {
    const dispatch = useDispatch()
    const handleRemove = (id) => {
        dispatch(removeMovie(id))
    }

    return (
        <Card className="movies__card">
            <CardContent>
                <Typography variant="h4">
                    Name - { movieName } 
                </Typography>
                <Typography variant="h5">
                    IMDB  Rankings - { ranking }
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    style={{ maxWidth: '70px', maxHeight: '50px', minWidth: '30px', minHeight: '30px', marginLeft:'40px'}}
                    variant="contained" 
                    color="secondary" 
                    onClick={() => handleRemove(id) }
                ><DeleteIcon/></Button>
            </CardActions>
        </Card>
    )
}

export default MoviesCard
