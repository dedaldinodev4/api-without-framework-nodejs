

class Hero {
    constructor({ name, age, power}) {
        this.id = Math.floor(Math.random() * 100) + Date.now()
        this.name = name;
        this.age = age;
        this.power = power;
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

module.exports = Hero;

// const hero = new Hero({ name: 'Chapolin', age: 100, power: 'Super Força'});
// console.log('valid', hero.isValid());
// console.log('valid', hero);