const Bag = require('./Bag')
const Passenger = require('./Passenger')

describe('Bag Class', () => {
    const testPassenger = new Passenger("Jazmin", 1, "A1")
    const testBag = new Bag(22, testPassenger, "Plane 1")
    const testBag2 = new Bag(67, testPassenger, "Plane 1")

    describe('Correct Parameters', () => {
        test('bag must have weight', () => {
            expect(() => new Bag()).toThrowError('bag must have weight')
        })
    })

    describe('Correct Datatypes', () => {
        test('weight must be a number', () => {
            expect(typeof testBag.weight).toEqual("number")
        })

        test('passenger must be an object', () => {
            expect(typeof testBag.passenger).toEqual("object")
        })

        test('planeId must be a string', () => {
            expect(typeof testBag.planeId).toEqual("string")
        })
    })

    describe('isOverLimit Function', () => {
        test('returns false if bag is not over limit', () => {
            expect(testBag.isOverLimit()).toBe(false)
        })

        test('returns true if bag is over limit', () => {
            expect(testBag2.isOverLimit()).toBe(true)
        })
    })
})
