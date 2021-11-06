class Airport{
  // create a constructor with parameteres:
  //      airport: name, plane[]: planes at the airport
  constructor(name, planes) {
    (this.name = name), 
    (this.planes = planes);
  }

  // pre-condition: plane[] should not be empty
  // post-condition: returns plane[]
  plane_parked(planes) {
    if (this.planes.length > 0) {
      return ("Plane(s) parked: " + this.planes.map((plane) => { return plane }).join(", "));
    } else {
      return "No planes parked at this airport";
    }
  }

  // pre-condition: parameter plane
  // post-condition: pushes airplane name into plane[]
  plane_arriving(plane) {
    if (!this.planes.includes(plane)) {
      this.planes.push(plane);
    } else {
      throw new Error("ERROR_AIRPORT_PLANE_ARRIVING: PLANE HAS ALREADY ARRIVED");
    }
  }

  // pre-condition: parameter plane; plane[] should not be empty
  // post-condition: pops airplane name from plane[]
  plane_departing(plane) {
    if (this.planes.length > 0 && this.planes.includes(plane)) {
      this.planes.pop(plane);
    } else {
      throw new Error("ERROR_AIRPORT_PLANE_DEPARTING: PLANE[] IS EMPTY || PLANE NOT FOUND");
    }
  }
}

// manual testing
// const airport = new Airport("airportName", ["plane1", "plane2", "plane3"]);

// airport.plane_parked();

// airport.plane_arriving("plane4");

// airport.plane_departing("plane3");

// airport.plane_arriving("plane1")

// airport.plane_departing("plane3")

// console.log(airport.planes);

module.exports = Airport;
