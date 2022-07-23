var fs = require('fs');
var path = require('path');

module.exports.getAllMovies = () => {
    return new Promise((resolve, reject) => {
        const pathToMovie = path.join(__dirname, '../data/movie.json');
        fs.readFile(pathToMovie, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(JSON.parse(data, null, ' '));
        });
    });
};

module.exports.getMovieById = (id) => {
    return new Promise((resolve, reject) => {
        const pathToMovie = path.join(__dirname, '../data/movie.json');
        fs.readFile(pathToMovie, 'utf8', (err, data) => {
            if (err) reject(err);
            var movies = JSON.parse(data);
            var movie = movies.find((m) => m.id === parseInt(id));
            resolve(movie);
        });
    });
};
