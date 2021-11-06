const Plane = require('./Plane')


describe('Plane class datatypes', () => {
    //planeId is of type string
    test('planeId should be a string', () => {
        // create instance of the class
        const testPlane = new Plane('AB123', 'Airbus', 50)
        
        expect(typeof testPlane.planeId).toBe('string')
    })

    // planeType is of type string
    test('planeType should be a string', () => {
        // create instance of the class
        const testPlane = new Plane('AB123', 'Airbus', 50)
        
        expect(typeof testPlane.planeType).toBe('string')
    })

    // capacity is of type string
    test('planeType should be a number', () => {
        // create instance of the class
        const testPlane = new Plane('AB123', 'Airbus', 50)
        
        expect(typeof testPlane.capacity).toBe('number')
    })

    // airLine is of type string
    test('airLine should be a string', () => {
        // create instance of the class
        const testPlane = new Plane('AB123', 'Airbus', 50)
        
        expect(typeof testPlane.airLine).toBe('string')
    })

    // departureAirport is of type string
    test('departureAirport should be a number', () => {
        // create instance of the class
        const testPlane = new Plane('AB123', 'Airbus', 50)
        
        expect(typeof testPlane.departureAirport).toBe('string')
    })

    // arrivalAirport is of type string
    test('arrivalAirport should be a number', () => {
        // create instance of the class
        const testPlane = new Plane('AB123', 'Airbus', 50)
        
        expect(typeof testPlane.arrivalAirport).toBe('string')
    })

    // onBoardPassengers is of type string
    test('onBoardPassengers should be a number', () => {
        // create instance of the class
        const testPlane = new Plane('AB123', 'Airbus', 50)
        
        expect(typeof testPlane.onBoardPassengers).toBe('object')
    })

    // crewMembers is of type string
    test('crewmembers should be a number', () => {
        // create instance of the class
        const testPlane = new Plane('AB123', 'Airbus', 50)
        
        expect(typeof testPlane.crewMembers).toBe('object')
    })

})

describe('Plane functions', () => {
    // addAirline should store a string
    test('addAirline should store a string', () => {
        
        const testPlane = new Plane('AB123', 'Airbus', 50)
        testPlane.addAirline('American Airline')

        expect(typeof testPlane.airLine).toBe("string")
    })

     // addDepartureAirport should store a string
     test('addDepartureAirport should store a string', () => {
        
        const testPlane = new Plane('AB123', 'Airbus', 50)
        testPlane.addDepartureAirport('JFK')

        expect(typeof testPlane.departureAirport).toBe("string")
    })

    // addArrivalAirport should store a string
    test('addArrivalAirport should store a string', () => {
        
        const testPlane = new Plane('AB123', 'Airbus', 50)
        testPlane.addArrivalAirport('LAX')

        expect(typeof testPlane.arrivalAirport).toBe("string")
    })

     // board should store a passenger object
     test('board should store a passenger object', () => {
        
        const testPlane = new Plane('AB123', 'Airbus', 50)
        testPlane.board({})

        expect(typeof testPlane.onBoardPassengers[0]).toBe("object")
    })

     // offBoard should make onBoardPassengers empty
     test('offBoard should make onBoardPassengers empty', () => {
        
        const testPlane = new Plane('AB123', 'Airbus', 50)
        testPlane.board({name: "John"})
        testPlane.offBoard({name: "John"})

        expect(testPlane.onBoardPassengers.length).toEqual(0)
    })

         // addCrewmember should store a crewMember object
         test('addCrewmember should store a passenger object', () => {
        
            const testPlane = new Plane('AB123', 'Airbus', 50)
            testPlane.addCrewMember({name: "John"})
    
            expect(typeof testPlane.crewMembers[0]).toBe("object")
        })
    
         // removeCrewmember should store a crewMember object
         test('offBoard should make onBoardPassengers empty', () => {
            
            const testPlane = new Plane('AB123', 'Airbus', 50)
            testPlane.addCrewMember({name: "John"})
            testPlane.removeCrewMember({name: "John"})
    
            expect(testPlane.crewMembers.length).toEqual(0)
        })


})


