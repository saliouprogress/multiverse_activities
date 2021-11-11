const Person = require('./Person')

class Passenger extends Person {
    constructor(name, bags) {
        super(name, bags, flightNumber);
        this.passportNumber = passportNumber
    }

    callAttendant() {
        console.log('Excuse me, Hay there')
    }
}

module.exports = Passenger