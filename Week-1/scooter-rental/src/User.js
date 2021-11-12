const Station = require('./Station')
const Scooter = require('./Scooter')
const App = require('./App')

class User {
    static users = []
    constructor(name) {
        this.name = name
        this.age = 0
        this.hasApp = false
        this.hasRegistered = false
        this.rentedScooter = ''
        this.paymentCard = ''
        this.app = {}
        this.constructor.users.push(this)
    }

    downloadApp(app) {
        if (app) {
            this.app = app
            this.hasApp = true            
        } else {
            console.log("...what are you trying to download???")
            return "...what are you trying to download???"
        }
    }
        
    registerUser(cardInfo, age) {
        if(this.hasApp) {
            if(age >= 18) {
                this.age = age
                this.paymentCard = cardInfo
                this.hasRegistered = true
                this.app.addUser(this)
            } else {
                console.log('Sorry, you must be at least 18 years old :(')
            }
          
        } else {
            console.log('You must download the app first :)')
        }
    }

    rentScooter(scooter) {
        if (this.hasApp && this.hasRegistered) {
            this.rentedScooter = scooter.scooterID
            let currentStation = Station.allstations.find(currentStation => currentStation.name === scooter.currentChargingStation)
            if(currentStation && scooter.rentStatus === false) {
                currentStation.removeScooter(scooter)
                scooter.isCharging()
            }
        } else {
            console.log("...I thought we told you to download the app...")
            return "...I thought we told you to download the app..."
        }
    }

    returnScooter(station) {
        if (this.hasApp && this.hasRegistered) {
            let currentScooter = Scooter.allScooters.find(currentScooter => currentScooter.scooterID === this.rentedScooter)
            if(currentScooter) {
                station.addScooter(currentScooter)
                currentScooter.isRented()
                this.rentedScooter = ''
                currentScooter.isCharging()
            }
            this.payRental()
        } else {
            console.log("...I thought we told you to download the app...")
            return "...I thought we told you to download the app..."
        }
    }

    payRental() {
        if(this.app) {
           return this.app.collectPayment(this)
        } else {
            return 'payment unsuccesful'
        }
    }
}

module.exports = User