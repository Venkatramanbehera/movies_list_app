import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Card, CardActions, CardContent, TextField, Typography } from '@material-ui/core'
import { addMovie } from '../action/movieAction'

import './css/MoviesForm.css'

const MovieForm = (props) => {
    const dispatch = useDispatch()

    const [ movieName, setMovieName ] = useState('')
    const [ ranking, setRanking ] = useState('')

    const handleChangeMovie = (e) => {
        const data = e.target.value 
        setMovieName(data)
    }

    const handleChangeRanking = (e) => {
        setRanking(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const movie = {
            id : Number(new Date()),
            movieName : movieName,
            ranking :Number( ranking )
        }
        const resetForm = () => {
            setRanking('')
            setMovieName('')
        }
        
        dispatch(addMovie(movie,resetForm))
    }

    return (
        <div>
            <Card className="movie__card">
                <form onSubmit={ handleSubmit }>
                    <CardContent>
                        <Typography variant="h5" style={{ textAlign:'center'}}>
                            Add Movie
                        </Typography>
                        <div className="movie__name">
                            <TextField 
                                style={{ width:'300px'}}
                                variant="outlined" 
                                label="Enter Movie Name" 
                                value={movieName} 
                                onChange={ handleChangeMovie }
                            />
                        </div>
                        <div className="imdb__ranking">
                            <TextField 
                                style={{ width:'300px'}}
                                variant="outlined" 
                                label="IMDB Ranking"
                                value={ ranking }
                                onChange={ handleChangeRanking }
                            />
                        </div>
                    </CardContent>
                    <CardActions>
                        <div className="button">
                            <Button style={{ width : '200px', textAlign : 'center', marginLeft:'40px'}} variant="contained" color="primary" type="submit">Add</Button>
                        </div>
                    </CardActions>
                </form>
            </Card>
        </div>
    )
}

export default MovieForm
