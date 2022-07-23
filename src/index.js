const express = require('express');
const movieService = require('./services/movie');
var HTTP_PORT = process.env.PORT || 8080;

var app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Get goals' });
});

app.get('/movie', (req, res) => {
    movieService.getAllMovies().then((movies) => {
        res.status(200).json(movies);
    });
});

app.get('/movie/:id', (req, res) => {
    var movieId = req.params.id;
    movieService.getMovieById(movieId).then((movie) => {
        res.status(200).json(movie);
    });
});

app.listen(HTTP_PORT, () => {
    console.log('Server running on port ' + HTTP_PORT);
});
