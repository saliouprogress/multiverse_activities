const Plane = require('./Plane')

class Airport {
	static airports = []

	constructor(name) {
		this.name = name,
		this.planes = []
		this.constructor.airports.push(this)
	}

	addPlane(plane) {
		this.planes.push(plane)
		plane.origin = this.name
	}

	flyAway(plane) { // When plane has origin AND destination
		// purpose of this method would be to change plane's destination
		// needs to be removed from Airport.planes
		this.planes = this.planes.filter(pl => pl !== plane)
		plane.origin = plane.destination
		// Make plane destination empty
		plane.destination = ''
		// push plane onto destination airport's planes array
		const newAirport = Airport.airports.find(air => air.name === plane.origin)
		newAirport.addPlane(plane)
	}
}

// // Airport 1
// const airport1 = new Airport("LAX") // We have an airport
// const plane1 = new Plane("plane1") // planes are born in airports,
// airport1.addPlane(plane1) // How to get plane origin

// // Airport 2
// const airport2 = new Airport("LAG")

// plane1.setOrigin(airport1.name)
// plane1.setDestination(airport2.name)

// console.log(plane1)
// console.log("Before: airport1", airport1.planes)
// console.log("Before: airport2", airport2.planes)
// airport1.flyAway(plane1)
// console.log(plane1)
// console.log("After: airport1", airport1.planes)
// console.log("After: airport2", airport2.planes)

module.exports = Airport