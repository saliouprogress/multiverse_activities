s   class CrewMember {
    constructor(name = 'unknown', position = 'unknown', staffNumber = -Infinity, planeId = 'unknown') {
        this.name = name 
        this.position = position.toLowerCase() // to make sure it matches the switch cases for the provideService method
        this.staffNumber = staffNumber
        this.planeId = planeId
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

