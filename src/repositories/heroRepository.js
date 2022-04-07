const { readFile, writeFile } = require('fs/promises');

class HeroRepository {
    constructor({ file }) {
        this.file = file;
    }

    async _currentFileContent() {
        return JSON.parse( await readFile(this.file));
    }

    async find(itemId) {
        const all = await this._currentFileContent();
        if (!itemId) return {
            totalHeroes: all.length,
            data: all
        }

        return all.find(({ id }) => itemId === id);
    }

    async create(data) {
        const currentFile = await this._currentFileContent();

        if( currentFile.find(({ name }) => name === data.name)) {
            return { message: 'Hero Already exists!'}
        }
        currentFile.push(data);

        await writeFile(this.file, JSON.stringify(currentFile));

        return data;
    }

    async update(data, itemId) {
        const all = await this._currentFileContent();

        if (!itemId) return null; //* Quando o id não é um valor válido *//

        if (all.find(({ id }) => id === itemId)) {
            const newArr = all.filter(function(item) {
                return item.id !== itemId
            })
            data = {
                id: itemId,
                ...data                
            }
            newArr.push(data);
            await writeFile(this.file, JSON.stringify(newArr));
            return data;
        } 

        return {
            message: "Hero doesn't exists!"
        }
        
    }

    async delete(itemId) {
        const all = await this._currentFileContent();

        if (!itemId) return null; //* Quando o id não é um valor válido *//

        if (all.find(({ id }) => id === itemId)) {
            const newArr = all.filter(function(item) {
                return item.id !== itemId
            })
    
            await writeFile(this.file, JSON.stringify(newArr));
            return {
                message: 'Hero deleted successful!'
            };
        } 
        return {
            message: "Hero doesn't exists!"
        }
        
    }
}

module.exports = HeroRepository;
 