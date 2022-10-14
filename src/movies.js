// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(allDirector => allDirector.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielberg = moviesArray.filter(condition1 => condition1.director === 'Steven Spielberg' && condition1.genre.indexOf('Drama') > -1)
    return spielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scores = moviesArray.map(allScores => allScores.score)
    const totalScores = scores.reduce(function(accumulator, currentValue) {
        if (currentValue) {
            return accumulator + currentValue;
           }
           else {
            return accumulator
           }
    }, 0)    
    const avgScore = totalScores / scores.length
    const finalScore = Math.round((avgScore*100))/100
    if(moviesArray.length === 0) return 0
    
    return finalScore
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const genreDrama = moviesArray.filter(condition1 => condition1.genre.indexOf('Drama') > -1)
    if(genreDrama.length === 0) {
    return 0
    } else {
    const scores = genreDrama.map(allScores => allScores.score)
    const dramaScore = scores.reduce(function(accumulator, currentValue) { 
    return accumulator + currentValue;
               
    })
           
    const avgScore = dramaScore / scores.length
    const finalScore = Math.round((avgScore*100))/100
    return finalScore
    }
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let movie = moviesArray.map(allMovie => allMovie)
    movie.sort((a, b) => {
    if(a.year > b.year){
        return 1
    }else {
        return -1
    }      
    })
    return movie
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let movie = moviesArray.map(allMovie => allMovie)
    let titleMovie = movie.map(movies => movies.title)
    titleMovie.sort()
    if(titleMovie.length > 20){
    titleMovie = titleMovie.splice(0, 20)
    }
    return titleMovie
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
