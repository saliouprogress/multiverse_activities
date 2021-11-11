class Person {
    constructor(name) {
        this.name = name
        this.bags = []
        this.flightNumber = ''
    }

    addBag(bag) {
        this.bags.push(bag)
        bag.owner = this.name
    }
}

module.exports = Person