const Scooter = require ("../src/Scooter")
const Station = require ("../src/Station")
const User = require ("../src/User")
const App = require ("../src/App")

// App
const scooterRental = new App("Scooter Rental")

// Charging Stations
const station1 = new Station("Station 1")
const station2 = new Station("Station 2")

// Scooters
const scooter1 = new Scooter("1")
const scooter2 = new Scooter("2")
const scooter3 = new Scooter("3")
const scooter4 = new Scooter("4")
const scooter5 = new Scooter("5")
const scooter6 = new Scooter("6")

// Users
const mamadou = new User("Mamadou")
const quiyet = new User("Quiyet")
const ranffi = new User("Ranffi")
const jazmin = new User("Jazmin")

const db = {
    app: scooterRental,
    stations: [
        station1, 
        station2
    ],
    scooters: 
        [
        scooter1,
        scooter2,
        scooter3,
        scooter4,
        scooter5,
        scooter6
    ],
    users: [
        mamadou,
        quiyet,
        ranffi,
        jazmin
    ]
}

module.exports = db