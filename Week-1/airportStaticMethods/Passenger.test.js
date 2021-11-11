const Passenger = require('./Passenger')
const Person = require('./Person')

const ranffi = new Passenger("Ranffi")

describe('Passenger Class', () => {
    test('is an instance of a Passenger', () => {
        expect(ranffi instanceof Passenger).toBeTruthy()
    })

    test('is an instance of a Person', () => {
        expect(ranffi instanceof Person).toBeTruthy()
    })
})