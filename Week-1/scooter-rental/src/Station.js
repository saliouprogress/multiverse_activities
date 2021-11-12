const Scooter = require("./Scooter");

class Station {

    static allstations = []

    constructor(name) {
        this.name = name
        this.scooters = []
        this.constructor.allstations.push(this)
    }

    // adds a scooter to scooters array
    addScooter (scooter) {
        this.scooters.push(scooter)
        scooter.currentChargingStation = this.name
    }

    // remove scooter from scooters array
    removeScooter ( scooter) {
        this.scooters = this.scooters.filter(bike => bike.scooterID !== scooter.scooterID )
        scooter.currentChargingStation = ""
    }

}


module.exports = Station