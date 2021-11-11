const Airport = require('./Airport')
const Person = require('./Person')
const CrewMember = require('./CrewMember')
const Passenger = require('./Passenger')

class Plane {
    static planes = []

    constructor(name){
        this.name = name
        this.origin = ''
        this.destination = ''
        this.flightNumber = ''
        this.passengers = []
        this.crewMembers = []
        this.constructor.planes.push(this)
    }

    setOrigin(origin) { // string - name of airport
        this.origin = origin
    }

    setDestination(destination) { // string - name of airport
        this.destination = destination
    }

    setFlightNumber(flightNumber) {
        this.flightNumber = flightNumber
    }

    board (person) {
        person.flightNumber = this.flightNumber
        person.bags.map(b => b.flightNumber = this.flightNumber)
        // check if person has position property
        if (person instanceof CrewMember) {
            // if yes, add to crewmembers array
            this.crewMembers.push(person)
        } else {
            // if no, add to passengers array
            this.passengers.push(person)
        } 
    }

    offBoard (person) {
        if (person instanceof CrewMember) {
            // remove from crewmembers array
            this.crewMembers = this.crewMembers.filter(p => p.name !== person.name)
        } else {
            // remove from passengers array
            this.passengers = this.passengers.filter(p => p.name !== person.name)
        }
    }
}

const plane1 = new Plane("Plane1")
const mamadou = new CrewMember("Mamadou")
plane1.board(mamadou)
console.log("passengers", plane1.passengers)
console.log("crewMembers", plane1.crewMembers)
plane1.offBoard(mamadou)
console.log("passengers", plane1.passengers)
console.log("crewMembers", plane1.crewMembers)

module.exports = Plane