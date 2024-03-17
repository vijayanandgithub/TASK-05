class Movie {
    constructor(title, studio, rating = "R") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getR(movies) {
        return movies.filter(movie => movie.rating === "R");
    }
}

// Creating an instance of the Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example usage of getPG method
const movies = [
    new Movie("SURA", "SUN PICTURE", "PG"),
    new Movie("MASTER", "SEVEN SCREEN STUDIO", "R"),
    new Movie("LEO", "Studio SEVEN SCREEN STUDIO", "PG"),
    new Movie("Movie 4", "Studio 4", "PG-13"),
    new Movie("Movie 5", "Studio 5", "G")
];

const RMovies = Movie.getR(movies);
console.log("R Movies:", RMovies);