const App = require('../src/App');
const Station = require('../src/Station')
const Scooter = require('../src/Scooter')
const User = require('../src/User')
const db = require('../db/db')

// user downloads app
db.users[0].downloadApp(db.app)
db.users[1].downloadApp(db.app)
// user registers
db.users[0].registerUser("7", 22)
db.users[1].registerUser("32", 84)

// adds scooter to station[0]
db.stations[0].addScooter(db.scooters[0]) 
// adds station[0] to app instance
db.app.addStation(db.stations[0]) 
db.app.findStationAndScooter(db.users[0])


describe('App Class', () => {
    describe('App instances', () => {
        test('can create an App instance', () => {
            expect(db.app).toBeTruthy()
        })
    })
    describe('App Functions', () => {
        describe('addUser() Function', () => {
            test('adds user object', () => {
                expect(db.app.users.length).toBe(2)
            })
        })
        describe('addStation() Function', () => {
            test('adds station object', () => {
                expect(db.app.stations.length).toBe(1)
            })
        })
        describe('findStationAndScooter() Function', () => {
            test('scooter.isRented() works', () => {
                expect(db.scooters[0].rentStatus).toBe(true)
            })
            
            test('user.rentScooter() works', () => {
                expect(db.users[0].rentedScooter).toEqual(db.scooters[0].scooterID)
            })

            test('', () => {
                // remove all scooters from app's stations by returning
                
                expect(db.app.findStationAndScooter(db.users[1])).toBe("...That's awkward. We have no more scooters...")
            })
        })
        describe('collectPayment() Function', () => {
            test('returns "Thank you"', () => {
                expect(db.app.collectPayment(db.app.users[0])).toBe("Thank you")
            })
        })
    })
})