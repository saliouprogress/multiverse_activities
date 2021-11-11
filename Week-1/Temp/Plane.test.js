const Person = require('./Person')
const Plane = require('./Plane')
const CrewMember = require('./CrewMember')
const Passenger = require('./Passenger')

const ranffi = new Passenger("Ranffi")
const quiyet = new CrewMember("quiyet")
const plane1 = new Plane("Plane1")

describe('Plane class', () => {
    const passenger = new Person('Bobby')
    const newPlane = new Plane('Delta')

    test('Plane has name', () => {
        expect(newPlane.name).toBe('Delta')
    })

    test('Plane has origin and destination', () => {
        newPlane.setOrigin('Cairo')
        newPlane.setDestination('Halifax')

        expect(newPlane.origin).toBe('Cairo')
        expect(newPlane.destination).toBe('Halifax')
    })

    test('Plane can add passengers', () => {
        newPlane.addPassenger(passenger)
        expect(newPlane.passengers.length).toBe(1)
    })

    describe('onboarding and offboarding', () => {
        describe('passengers', () => {
            test('onboards passenger', () => {
                plane1.board(ranffi)
                expect(plane1.passengers.find(p => p.name === ranffi.name)).toBeTruthy
            })
    
            test('check passengers array length after board', () => {
                expect(plane1.passengers.length).toBe(1)
            })
    
            test('offboards passenger', () => {
                plane1.offBoard(ranffi)
                expect(plane1.passengers.find(p => p.name === ranffi.name)).toBeFalsy
            })
    
            test('check passengers array length after offBoard', () => {
                plane1.offBoard(ranffi)
                expect(plane1.passengers.length).toBe(0)
            })
        })

        describe('CrewMembers', () => {
            test('onboards CrewMember', () => {
                plane1.board(quiyet)
                expect(plane1.crewMembers.find(p => p.name === quiyet.name)).toBeTruthy
            })
    
            test('check crewmembers array length after board', () => {
                expect(plane1.crewMembers.length).toBe(1)
            })

            test('offboards CrewMember', () => {
                plane1.offBoard(quiyet)
                expect(plane1.crewMembers.find(p => p.name === quiyet.name)).toBeFalsy
            })
    
            test('check CrewMember array length after offBoard', () => {
                plane1.offBoard(quiyet)
                expect(plane1.crewMembers.length).toBe(0)
            })
        })
    })
})