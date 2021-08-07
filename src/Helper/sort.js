export const sort = (arr) => {
    const result = [...arr]
    for(let i=0; i<result.length; i++){
        for(let j=0; j<result.length-i-1; j++){
            if(result[j+1].movieName.toLowerCase().charCodeAt(0) < result[j].movieName.toLowerCase().charCodeAt(0)){
                [ result[j+1], result[j] ] = [ result[j], result[j+1]]
            }
        }
    }
    return result
}

export const sortReverse = (arr) => {
    const result = [...arr]
    for(let i=0; i<result.length; i++){
        for(let j=0; j<result.length-i-1; j++){
            if(result[j+1].movieName.toLowerCase().charCodeAt(0) > result[j].movieName.toLowerCase().charCodeAt(0)){
                [ result[j+1], result[j] ] = [ result[j], result[j+1]]
            }
        }
    }
    return result
}

export const incSort = (arr)=> {
    const result = [...arr]
    for(let i=0; i<result.length; i++){
        for(let j=0; j<result.length-i-1; j++){
            if(result[j+1].ranking > result[j].ranking){
                [result[j+1], result[j]] = [result[j], result[j+1]]
            }
        }
    }
    return result
}

export const decSort = (arr)=> {
    const result = [...arr]
    for(let i=0; i<result.length; i++){
        for(let j=0; j<result.length-i-1; j++){
            if(result[j+1].ranking < result[j].ranking){
                [result[j+1], result[j]] = [result[j], result[j+1]]
            }
        }
    }
    return result
}


