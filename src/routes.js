const DEFAULT_HEADER = { 'Content-Type': 'application/json' }
const Movie = require('./entities/movie');
const MovieFactory = require('./factories/movieFactory');
const movieService = MovieFactory.generateInstance();

const routes = {
    'movies:get': async (request, response) => {
        const { id } = request.queryString;
        const movies = await movieService.find(id)
        response.write(JSON.stringify({ results: movies }));
        
        return response.end();
    },
    'movies:post': async (request, response) => {
        try {
            
            //* async iterator *//
            for await (const data of request) {
                const item = JSON.parse(data);
                const movie = new Movie(item);
                const { error, valid } = movie.isValid()
                if (!valid) {
                    response.writeHead(400, DEFAULT_HEADER)
                    response.write(JSON.stringify({ error: error.join(',') }))
                    return response.end()
                }
    
                const result = await movieService.create(movie)
                response.writeHead(201, DEFAULT_HEADER)
                response.write(JSON.stringify({result}));
                return response.end()
            }
        } catch (error) {
            return handleError(response)(error)
        }
        
    },
    'movies:put': async (request, response) => {
        const { id } = request.queryString;
        
        try { 
            for await (const data of request) {
                
                const item = JSON.parse(data);
                const result = await movieService.update(item, id);
                response.writeHead(201, DEFAULT_HEADER)
                response.write(JSON.stringify({result}));
                return response.end()
            }
        
        } catch (error) {
            return handleError(response)(error)
        }
        
    },
    'movies:delete': async (request, response) => {
        const { id } = request.queryString;
        
        try { 
            
            const result = await movieService.delete(id);
            response.writeHead(201, DEFAULT_HEADER)
            response.write(JSON.stringify({result}));
            return response.end()
        
        } catch (error) {
            return handleError(response)(error)
        }
    },
    default: (request, response) => {
        response.write('Hello My API Build of node.js without framework.')
        response.end()
    }
}

module.exports =  routes;