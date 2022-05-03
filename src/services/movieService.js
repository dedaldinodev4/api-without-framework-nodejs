//** Classe Responsável pela regra de negócio. **//

class MovieService {

    constructor({ movieRepository }) {
        this.movieRepository = movieRepository;
    }

    async find(movieId) {
        return this.movieRepository.find(movieId)
    }

    async create(data) {
        return this.movieRepository.create(data)
    }

    async update(data, movieId) {
        return this.movieRepository.update(data, movieId)
    }

    async delete(movieId) {
        return this.movieRepository.delete(movieId)
    }
}


module.exports = MovieService

