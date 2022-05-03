
const http = require('http');
const _PORT = 3000
const routes = require('./routes');
const handleError = require('./errors/handlerError');


const handler = (request, response) => {
    const { url, method } = request
    const [first, route, id] = url.split('/')
    request.queryString = { id: isNaN(id) ? id : Number(id) }

    const key = `${route}:${method.toLowerCase()}`

    response.writeHead(200, { 'Content-Type': 'application/json' });
    const chosen = routes[key] || routes.default
    return chosen(request, response).catch(handleError(response))

}


http.createServer(handler)
    .listen(_PORT, () => console.log('Server running at ', _PORT))