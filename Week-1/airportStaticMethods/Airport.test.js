const Airport = require('./Airport')
const Plane = require('./Plane')
const Bag = require('./Bag')
const Person = require('./Person')


describe('Airport object', () => {
	const testAirport = new Airport("DFW")
	const testPlane = new Plane('912')
	const testPerson = new Person('Damon')
	const testBag = new Bag(55)

	test('airport has a name', () => {
		expect(testAirport.name).toBe("DFW")
	})

	test('airport has planes', () => {
		expect(Array.isArray(testAirport.planes)).toBe(true)
	})

	test('airport can add planes', () => {
		testAirport.addPlane(testPlane)
		expect(testAirport.planes.length).toBe(1)
	})

	test('airport can have planes with passengers with bags', () => {
		testPerson.addBag(testBag)
		testPlane.board(testPerson)
		testAirport.addPlane(testPlane)
		expect(testAirport.planes[0].passengers[0].bags[0].weight).toBe(55)
	})

	describe('flyAway method', () => {
		const airportA = new Airport("LAX")
		const airportB = new Airport("LAG")
		const planeA = new Plane("Plane A")
		airportA.addPlane(planeA)
		planeA.destination = "LAG"
		airportA.flyAway(planeA)

		test('removes plane from the airport planes array', () => {
			expect(airportA.planes.length).toBe(0)
		})

		test('sets plane destination to origin', () => {
			expect(planeA.origin).toBe(airportB.name)
		})

		test('sets plane destination to empty string', () => {
			expect(planeA.destination).toBe('')
		})

		test('adds plane to destination airport planes array', () => {
			expect(airportB.planes.length).toBe(1)
		})
	})

	describe('static airports method', () => {
		test('new airport is pushed into airports array', () => {
			expect(Airport.airports.length).toBe(3)
		})
	})
})