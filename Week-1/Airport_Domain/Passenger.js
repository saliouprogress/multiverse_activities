class Passenger {
    constructor(name, passportNumber, seatNumber, planeId = "not yet boarded" ) {
        this.name = name,
        this.passportNumber = passportNumber,
        this.seatNumber = seatNumber,
        this.planeId = planeId
        this.bags = []
    }

    addBag(bag) {
        this.bags.push(bag)
    }

    addPlane(boardedPlane) {
        this.planeId = boardedPlane
    }
}

const jazmin = new Passenger("jazmin", 1, "A1")
console.log(jazmin)


module.exports = Passenger
