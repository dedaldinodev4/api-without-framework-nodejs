const { readFile, writeFile } = require('fs/promises');

class MovieRepository {
    constructor({ file }) {
        this.file = file;
    }

    async _currentFileContent() {
        return JSON.parse( await readFile(this.file));
    }

    async find(movieId) {
        const all = await this._currentFileContent();
        if (!movieId) return {
            totalMovies: all.length,
            data: all
        }

        return all.find(({ id }) => movieId === id);
    }

    async create(data) {
        const currentFile = await this._currentFileContent();

        if( currentFile.find(({ title }) => title === data.title)) {
            return { message: 'Movie Already exists!'}
        }
        currentFile.push(data);

        await writeFile(this.file, JSON.stringify(currentFile));

        return data;
    }

    async update(data, movieId) {
        const all = await this._currentFileContent();

        if (!movieId) return null; //* Quando o id não é um valor válido *//

        if (all.find(({ id }) => id === movieId)) {
            const newArr = all.filter(function(item) {
                return item.id !== movieId
            })
            data = {
                id: movieId,
                ...data                
            }
            newArr.push(data);
            await writeFile(this.file, JSON.stringify(newArr));
            return data;
        } 

        return {
            message: "Movie doesn't exists!"
        }
        
    }

    async delete(movieId) {
        const all = await this._currentFileContent();

        if (!movieId) return null; //* Quando o id não é um valor válido *//

        if (all.find(({ id }) => id === movieId)) {
            const newArr = all.filter(function(item) {
                return item.id !== movieId
            })
    
            await writeFile(this.file, JSON.stringify(newArr));
            return {
                message: 'Movie deleted successful!'
            };
        } 
        return {
            message: "Movie doesn't exists!"
        }
        
    }
}

module.exports = MovieRepository;
 