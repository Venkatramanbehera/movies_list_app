import { Card, CardContent, Typography } from '@material-ui/core'
import React,{ useEffect,useState }  from 'react'

import { useSelector } from 'react-redux'

const MovieStats = (props) => {

    
    const movies = useSelector((state) => {
        return state.movies
    })

    const [ highest, setHighest ] = useState(movies.length > 0 ? movies[0].movieName : '')
    
    const topMovie = () => {
        let result =movies.length > 0 ? movies[0].movieName : null
        let resultRanking = movies.length > 0 ?movies[0].ranking : null
        movies.forEach((ele) => {
            if(ele.ranking < resultRanking){
                resultRanking = ele.ranking 
                result = ele.movieName
            }
        })
        return result
    }

    useEffect(() => {
        const result = topMovie()
        setHighest(result)
    }, [movies])
    
    return (
        <div className="stats__card">
            <Card style={{width:'400px', marginLeft:'25px', height:'300px'}}>
                <CardContent>
                    <Typography variant="h4">
                        Movie Stats
                    </Typography>
                    {
                        movies.length > 0 && 
                        <Typography variant="h5">
                            Total Movies - { movies.length }
                        </Typography>
                    }

                    {
                        movies.length > 0 && 
                        <Typography variant="h5">
                            Top Rank Movie Name - { highest }
                        </Typography>
                    }
                    
                </CardContent>
            </Card>
        </div>
    )
}

export default MovieStats
