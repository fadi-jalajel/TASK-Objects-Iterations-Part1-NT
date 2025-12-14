/******************************
🎬 Movie Type Definition
******************************/
interface Movie {
    title: string;
    director: string;
    year: number;
    genre: string;
}

const movies: Movie[] = [
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
        genre: "Drama",
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        genre: "Crime",
    },
    {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: 1994,
        genre: "Crime",
    },
    {
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        genre: "Action",
    },
    {
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        year: 1994,
        genre: "Drama",
    },
];

/******************************
✅ Q1) Create a function that accepts an array of movies 
and prints the title of each movie.
 
// Example usage:
printMovieTitles(movies);
******************************/

function printMovieTitles(movies: Movie[]) {
movies.forEach((movie) => console.log(movie.title));
}

printMovieTitles(movies);

/******************************
✅ Q2) Create a function that accepts:
 - an array of movies
 - a year
and returns how many movies were released in that year.
// Example usage:
console.log(countMoviesByYear(movies, 1994)); // Output: 3
******************************/
function countMoviesByYear(movies: Movie[], movieYear: number){
movies.forEach((movie) => { if(movie.year == movieYear){ console.log(movie.title, movie.year);}}
);
}

countMoviesByYear(movies, 1994); 

/******************************
✅ Q3) Create a function that:
 - accepts an array of movies
 - a title
 - a new genre
The function should update the genre of the movie with the given title
and return the modified array of movies.
 
// Example usage:
const updatedMovies = updateMovieGenre(movies, "Pulp Fiction", "Classic Crime");
******************************/

function updateMovieGenre(movies: Movie[], movieTitle: string, movieGenre: string){
movies.map( (movies)=> { if(movies.title == movieTitle){
    movies.genre = movieGenre;
}

});
return movies;
}

const updatedMovies = updateMovieGenre(movies, "Pulp Fiction", "Classic Crime");
console.log(updatedMovies);