

class Movie {
    constructor({ title, category, writter }) {
        this.id = Math.floor(Math.random() * 100) + Date.now()
        this.title = title;
        this.category = category;
        this.writter = writter
        this.created_at = new Date()
    }

    isValid() {
        //* Retorna as propriedades da classe *//
        const propertyNames = Object.getOwnPropertyNames(this); 

        const amountInvalid = propertyNames
            .map(property => (!!this[property]) ? null : `${property} is missing!`)
            .filter(item => !!item)

        return {
            valid: amountInvalid.length === 0,
            error: amountInvalid
        }
        
    }
}

module.exports = Movie;

// const movie = new Movie({
//     title: 'Tenet',
//     category: 'Ficção',
//     writter: 'Christopher Nolan'
// })

// console.log(movie);
