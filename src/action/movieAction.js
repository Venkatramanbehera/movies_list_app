export const addMovie = (movie, resetForm) => {
    resetForm()
    return {
        type : "ADD_MOVIE",
        payload : movie
    }
} 

export const removeMovie = (id) => {
    return {
        type : "REMOVE_MOVIE",
        payload : id
    }
}
