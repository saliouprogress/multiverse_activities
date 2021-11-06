const CrewMember = require('./CrewMember')


//name, position, staffNumber, planeId

let pilot = new CrewMember('Jazmin', 'Pilot', 234765423, 'Multiverse-747')



describe ('CrewMember data types', () => {
    test('is name a string?', () => {
    
        expect(typeof pilot.name).toBe('string')
    })

    test('is position a string?', () => {
        expect(typeof pilot.position).toBe('string')
    })

    test('is staffNumber a number?', () => {
        expect(typeof pilot.staffNumber).toBe('number')
    })

    test('is plane a string?', () => {
        expect(typeof pilot.planeId).toBe('string')
    })
})


describe ('Provide Service Method', () => {
    test('Pilot', () => {
    
        expect(pilot.provideService()).toBe('Fly the plane')
    })

    test('is position a string?', () => {
        let flightAttendant = new CrewMember('Mamadou', 'FLIGHT ATTENDANT')

        expect(flightAttendant.provideService()).toBe('provide onboard service (Food, help, instructions')
    })

    test('is staffNumber a number?', () => {
        let baggage_claim = new CrewMember('Quiyet', 'Baggage Claim')
        expect(baggage_claim.provideService()).toBe('recieve your bags and insure arrival of your bags')
    })

})