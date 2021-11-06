class Bag {
    constructor(weight, passenger, planeId) {
        if (!weight) {
            throw new Error('bag must have weight')
        }
        this.weight = weight,
        this.passenger = passenger,
        this.planeId = planeId
    }

    isOverLimit() {
        return this.weight > 50 ? true : false
    }
}

const bag = new Bag(15)
console.log(bag.weight)
console.log(bag.isOverLimit())

module.exports = Bag
