const Station = require('../src/Station')
const db      = require('../db/db')

describe('Testing Station Class', () => {
    
    test ('name should be a string', () => {
        expect(typeof db.stations[0].name).toBe('string')
    })

    test ('scooters array should be an object', () => {
        expect(typeof db.stations[0].scooters).toBe('object')
    })

    test ('allstations should be an object', () => {
        expect(typeof Station.allstations).toBe('object')
    })

    test ('allstations should contain all instances of created stations', () => {
        expect(Station.allstations.length).toBe(db.stations.length)
    })

    describe ('Testing addScooter function', () => {
        const numOfScooters = db.stations[0].scooters.length
        test ('addScooter should add a scooter to scooters array', () => {
            db.stations[0].addScooter(db.scooters[0])
            expect(db.stations[0].scooters.length).toBe(numOfScooters + 1)
        })

        test ('addScooter should update charging station for scooter', () => {
            expect(db.scooters[0].currentChargingStation).toBe(db.stations[0].name)
        })

        test ('removeScooter should remove a scooter from scooters array', () => {
            db.stations[0].removeScooter(db.scooters[0])
            expect(db.stations[0].scooters.length).toBe(numOfScooters)
        })

        test ('removeScooter should update charging station for scooter to empty string', () => {
            expect(db.scooters[0].currentChargingStation).toBe("")
        })
    })
})


