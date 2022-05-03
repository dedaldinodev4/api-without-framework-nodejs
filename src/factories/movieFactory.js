const MovieRepository = require("../repositories/movieRepository");
const MovieService = require('../services/movieService');

const { join } = require('path');
const filename = join(__dirname, '../../database', 'data.json');

const generateInstance = () => {
    const movieRepository = new MovieRepository({
        file: filename
    });
    const movieService = new MovieService({
        movieRepository
    });

    return movieService;

}

module.exports = { generateInstance }
