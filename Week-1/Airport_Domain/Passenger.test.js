const Passenger = require('./Passenger')
const Bag = require('./Bag')

describe('Passenger Class', () => {
    const testPassenger = new Passenger("Jazmin", 1, "A1")
    const testBag = new Bag(22, testPassenger, "Plane 1")

    describe('Correct Datatypes', () => {
        test('name must be a string', () => {
            expect(typeof testPassenger.name).toEqual("string")
        })

        test('passportNumber must be a number', () => {
            expect(typeof testPassenger.passportNumber).toEqual("number")
        })

        test('seatNumber must be a string', () => {
            expect(typeof testPassenger.seatNumber).toEqual("string")
        })
    })

    describe('addBag Function', () => {
        test('correctly adds to bags property', () => {
            testPassenger.addBag(testBag)
            expect(testPassenger.bags.length).toEqual(1)
        })
    })

    describe('addPlane Function', () => {
        test('correctly updates planeId', () => {
            testPassenger.addPlane("Plane 7")
            expect(testPassenger.planeId).not.toBe("not yet boarded")
        })
    })
})
