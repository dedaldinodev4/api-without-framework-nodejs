
const handleError = response => {
    return error => {
        console.log("Error: *** ", error);
        response.writeHead(500, { 
            'Content-Type': 'application/json' 
        })
        response.write(JSON.stringify({ error: 'Internal Server Error!!'}))

        return response.end()
    }
}

module.exports = handleError;