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
        if (!itemId) return all;

        return all.find(({ id }) => itemId === id);
    }

    async create(data) {
        const currentFile = await this._currentFileContent();
        currentFile.push(data);

        await writeFile(this.file, JSON.stringify(currentFile));

        return data.id;
    }
}

module.exports = HeroRepository;

// const hero = new HeroRepository({
//     file: './../../database/data.json'
// })
// hero.find().then(console.log).catch(error => console.log('error: ', error));

// hero.create({
//     'id': 1,
//     'name': 'Dr. Stranger',
//     'age': 38
// }).then(console.log).catch(error => console.log(error))