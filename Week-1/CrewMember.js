const Person = require('./Person')

class CrewMember extends Person {
    constructor(name, bags) {
        super(name, bags);
        this.position = ""
    }

    provideService() {
        switch(this.position) {
            case 'pilot':
                return 'Fly the plane'
                break;

            case 'flight attendant':
                return 'provide onboard service (Food, help, instructions'
                break;

            case 'baggage claim':
                return 'recieve your bags and insure arrival of your bags'
                break;

            default:
                return 'Be nice, and helpful regardless of position';
        }
    }

}

module.exports = CrewMember