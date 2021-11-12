const Station = require('../src/Station')
const Scooter = require('../src/Scooter')
const User = require('../src/User')

class App {
    constructor(name) {
        this.name = name
        this.users = []
        this.stations = []
    }

    addUser(user) {
        this.users.push(user)
    }

    addStation(station) {
        this.stations.push(station)
    }

    findStationAndScooter(user) {
        const station = this.stations.find(charStat => charStat.scooters.length > 0)

        if (station) {
            // find scooter that is fully charged
            const scooter = station.scooters.find(s => s.isFullyCharged === true)
            // const scooter = station.scooters[0] // comment this line out & uncomment line above
            user.rentScooter(scooter)
            scooter.isRented()
        } else {
            console.log("...That's awkward. We have no more scooters...")
            return "...That's awkward. We have no more scooters..."
        }
    }

    collectPayment(user) {
        console.log(`Thank you for paying ${user.name}`)
        return "Thank you" 
    }
}

// const scooterRental = new App("Scooter Rental")
// const station1 = new Station("Station 1")
// const scooter1 = new Scooter("1")
// const mamadou = new User("Mamadou")

// scooterRental.addUser(mamadou)
// station1.addScooter(scooter1)
// scooterRental.addStation(station1)

// console.log("before:", scooterRental.stations[0].scooters)
// scooterRental.findStationAndScooter(mamadou)
// console.log("after:", scooterRental.stations[0].scooters)

module.exports = App;