import React from 'react'
import { useSelector } from 'react-redux'

import Movies from './Movies'
import './css/MoviesList.css'

import { FormControl,InputLabel, Select, MenuItem, TextField } from '@material-ui/core'
import { useState } from 'react'
import { useEffect } from 'react'

import { decSort, incSort, sort, sortReverse } from '../Helper/sort'

const MoviesList = (props) => {
    const [search, setSearch] = useState('')
    const [select, setSelect ] = useState('')

    
    const result = useSelector((state) => {
        return state.movies
    })
    
    const [ filter, setFilter ] = useState([])

    useEffect(() => {
        setFilter(result)
    },[result])

    const filterData = (data) => {
        const resultArray = result.filter((ele) => {
            return ele.movieName.toLowerCase().includes(data)
        })
        return resultArray
    }

    const handleSearchBar = (e) => {
        const data = e.target.value 
        setSearch(data) 
        setFilter( filterData(data) )
    }

    const handleSelectChange = (e) => {

        const data = e.target.value 
        setSelect(data)
        if(data ==='atoz'){
            const resultData = sort(result)
            setFilter(resultData)
        }
        else if(data === 'ztoa'){
            const resultData = sortReverse(result)
            setFilter(resultData)
        }else if( data === 'decreasing'){
            const resultData = incSort(result)
            setFilter(resultData)
        }else if( data === 'increasing'){
            const resultData = decSort(result)
            setFilter(resultData)
        }
        
    }

    return (
        <div className="movies__list">
            <div className="search">
                <div className="search__bar">
                    <TextField 
                        style = {{ width:'300px'}}
                        id="standard-search" 
                        label="Search field" 
                        type="search" 
                        value={ search } 
                        onChange={ handleSearchBar }        
                    />
                </div>
                <div className="select">
                    <FormControl >
                        <InputLabel>Sort By</InputLabel>
                        <Select value={ select } onChange={ handleSelectChange } style = {{ width:'200px'}}>
                            <MenuItem value="atoz">A to Z</MenuItem>
                            <MenuItem value="ztoa">Z to A</MenuItem>
                            <MenuItem value="increasing">increasing</MenuItem>
                            <MenuItem value="decreasing">decreasing</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            {
                result.length === 0 ? <h1>Add your movies</h1>  : <Movies result={ filter }/>
                
            }
            
        </div>
    )
}

export default MoviesList
