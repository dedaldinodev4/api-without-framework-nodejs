const DEFAULT_HEADER = { 'Content-Type': 'application/json' }
const HeroFactory = require('../factories/heroFactory');
const heroService = HeroFactory.generateInstance();
const Hero = require('../entities/hero');

const routes = {
    'heroes:get': async (request, response) => {
        const { id } = request.queryString;
        const heroes = await heroService.find(id)
        response.write(JSON.stringify({ results: heroes }));
        
        return response.end();
    },
    'heroes:post': async (request, response) => {
        try {
            
            //* async iterator *//
            for await (const data of request) {
                const item = JSON.parse(data);
                const hero = new Hero(item)
                const { error, valid } = hero.isValid()
                if (!valid) {
                    response.writeHead(400, DEFAULT_HEADER)
                    response.write(JSON.stringify({ error: error.join(',') }))
                    return response.end()
                }
    
                const result = await heroService.create(hero)
                response.writeHead(201, DEFAULT_HEADER)
                response.write(JSON.stringify({result}));
                return response.end()
            }
        } catch (error) {
            return handleError(response)(error)
        }
        
    },
    'heroes:put': async (request, response) => {
        const { id } = request.queryString;
        
        try { 
            for await (const data of request) {
                
                const item = JSON.parse(data);
                const result = await heroService.update(item, id);
                response.writeHead(201, DEFAULT_HEADER)
                response.write(JSON.stringify({result}));
                return response.end()
            }
        
        } catch (error) {
            return handleError(response)(error)
        }
        
    },
    'heroes:delete': async (request, response) => {
        const { id } = request.queryString;
        
        try { 
            
            const result = await heroService.delete(id);
            response.writeHead(201, DEFAULT_HEADER)
            response.write(JSON.stringify({result}));
            return response.end()
        
        } catch (error) {
            return handleError(response)(error)
        }
    },
    default: (request, response) => {
        response.write('Hello!')
        response.end()
    }
}

module.exports =  routes;