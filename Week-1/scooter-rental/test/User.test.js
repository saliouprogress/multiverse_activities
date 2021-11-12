const db = require('../db/db')
const ranffi = db.users[2]
const app = db.app
const scooter1 = db.scooters[0]
const station1 = db.stations[0]
describe('User class starting properties', () => {
    
    test('User has a name ', ()=> {
        expect(ranffi.name).toBe('Ranffi')
    })

    test('User starts off without the app', () => {
        expect(ranffi.hasApp).toBeFalsy()
    })

    test('User has not registered yet', () => {
        expect(ranffi.hasRegistered).toBeFalsy()
    })

    test('User has not rented a scooter yet', () => {
        expect(ranffi.rentedScooter).toBe('')
    })

    test('User.app property is an empty object', () => {
        expect(ranffi.paymentCard).toBeFalsy()
    })

})

describe('User class methods', ()=> {
    test('downloadApp() changes hasApp to true and assigns app to User', ()=> {
        ranffi.downloadApp(app)
            expect(ranffi.hasApp).toBeTruthy()
            expect(ranffi.app).toBe(app)
    })


    test(`registerUser(cardInfo)
    ------------------------------ 
    1.adds paymentCard to User 
    2.adds User in App.users. 
    3.turns hasregistered to true
    ------------------------------`, ()=>{
       // ranffi.downloadApp(app)
        let creditCard = '2346589012394586'
        ranffi.registerUser(creditCard, 27)
            expect(ranffi.paymentCard).toBe(creditCard)


    })

    test(`rentScooter(scooter)
    -------------------------------- 
    1.assigns a scooter to User 
    2. triggers Station.removeScooter
    ---------------------------------`, ()=> {
     // ranffi.downloadApp(app)
      station1.addScooter(scooter1)
      ranffi.rentScooter(scooter1)
        expect(ranffi.rentedScooter).toBe(scooter1.scooterID)
        expect(station1.scooters.length).toBe(0)
    })


    test(`returnScooter(station)
    ------------------------------------ 
    1. triggers payRental() 
    2. triggers Station.addScooter 
    3. sets rentedScooter to empty string
    -------------------------------------`, ()=> {
       // ranffi.downloadApp(app)
      //  station1.addScooter(scooter1)
        //ranffi.rentScooter(scooter1)
        ranffi.returnScooter(station1)
          expect(ranffi.rentedScooter).toBe('')
          expect(station1.scooters.length).toBe(1)
        })


    test(`payRental() triggers app.collectPayment()`, ()=> {
        //ranffi.downloadApp(app)
        expect(ranffi.payRental()).toBe(`Thank you`)
        })

})