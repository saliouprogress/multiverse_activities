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
		this.planes = this.planes.filter(pl => pl !== plane)
		plane.origin = plane.destination
		plane.destination = ''
		const newAirport = Airport.airports.find(air => air.name === plane.origin)
		newAirport.addPlane(plane)
	}
}

module.exports = Airport