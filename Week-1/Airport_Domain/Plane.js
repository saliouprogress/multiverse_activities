class Plane {
    constructor(planeId, planeType, capacity ) {
        this.planeId = planeId
        this.planeType = planeType
        this.capacity = capacity
        this.airLine = ""
        this.departureAirport = ""
        this.arrivalAirport = ""
        this.onBoardPassengers = []
        this.crewMembers = []
    }

    addAirline (airline) {
            this.airLine = airline
    }

    addDepartureAirport (departureAirport) {
        this.departureAirport = departureAirport
    }

    addArrivalAirport (arrivalAirport) {
        this.arrivalAirport = arrivalAirport
    }

    board (passenger) {
        if (this.onBoardPassengers.length <= this.capacity) {
            this.onBoardPassengers.push(passenger)
        } else {
            console.log("This plane is full!")
        }  
    }

    offBoard (passenger) {
        if (this.onBoardPassengers.length > 0 ) {
            this.onBoardPassengers = this.onBoardPassengers.filter((pass) => {
                return pass.name !== passenger.name
            })
            // console.log(this.onBoardPassengers)
        } else {
            console.log("This passenger is not on this plane")
        }
        
    }

    

    addCrewMember (crewMember) {
        if (this.onBoardPassengers.length + this.crewMembers.length <= this.capacity) {
            this.crewMembers.push(crewMember)
        } else {
            console.log("This plane has enough crew members")
        }  
    }

    removeCrewMember (crewMember) {
        if (this.crewMembers.length != 0 ) {
            this.crewMembers = this.crewMembers.filter((crew) => {
                return crew.name !== crewMember.name
            })
        } else {
            console.log("This crew member is not on this plane")
        }
    }
}


const AB123 = new Plane("AB123", "Airbus", 50)
const B77 = new Plane("B77", "Boing", 55)
AB123.addAirline("American Airline")

console.log(AB123.planeId, AB123.capacity)
console.log(B77.planeType )



module.exports = Plane;