const Airport = require("./Airport");
const Plane = require("./Plane");

const testPlane = new Plane("plane1", "", 42);
const testAirport = new Airport("testAirportName", [testPlane]);

describe("Airport Class Test", () => {
  describe("Airport class property datatypes", () => {
    test("airport name should be string", () => {
      expect(typeof testAirport.name).toBe("string");
    });

    test("planes[] should be object", () => {
      expect(typeof testAirport.planes).toBe("object");
    });
  });

  describe("Airport class functions", () => {
    describe("planes[] element datatypes", () => {
      // in this instance, plaineId is a unique value.
      // no need to test the other testPlane prop
      test("plane_parked values are string", () => {
        expect(typeof testAirport.plane_parked(testPlane.planeId)).toBe(
          "string"
        );
      });

      // testing planes for both plane arriving/departing function
      test("Airport using Plane object ", () => {
        expect(typeof testAirport.planes[0]).toBe("object");
      });
    });

    describe("plane[i] is at the right airport", () => {
      // testing planes for all arriving/departing/parked functions
      test("plane is at the right airport", () => {
        expect(testAirport.planes[0].planeId).toEqual(testPlane.planeId);
      });
    });
  });
});
