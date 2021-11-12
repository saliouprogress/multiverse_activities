const Scooter = require("../src/Scooter");
const db = require("../db/db");

describe("Scooter Class", () => {
  describe("scooterID and currentChargingStation tests", () => {
    test("Scooter ID is string", () => {
      expect(typeof db.scooters[0].scooterID).toBe("string");
    });
    test("Scooter has an ID", () => {
      expect(db.scooters[0].scooterID).toEqual("1");
    });
    test("Current chargin station is string", () => {
      expect(typeof db.scooters[0].currentChargingStation).toBe("string");
    });
    test("Current charging station", () => {
      db.stations[0].addScooter(db.scooters[0]);
      expect(db.scooters[0].currentChargingStation).toEqual(db.stations[0].name);
    });
  });

  describe("allScooters test", () => {
    test("all scooters from DB are in allScooters[]", () => {
      expect(Scooter.allScooters.length).toBe(6);
    });
  });

  describe("isRented tests", () => {
    test("rentStatus is boolean", () => {
      expect(typeof db.scooters[0].rentStatus).toBe("boolean");
    });

    test("Scooter is NOT rented", () => {
      expect(db.scooters[0].rentStatus).toBe(false);
    });
    test("Scooter is rented", () => {
      db.scooters[0].isRented();
      expect(db.scooters[0].rentStatus).toBe(true);
    });
  });

  describe("isCharging tests", () => {
    test("isFullyCharged is boolean", () => {
      expect(typeof db.scooters[0].isFullyCharged).toBe("boolean");
    });
    test("Scooter is fully charged", () => {
      expect(db.scooters[0].isFullyCharged).toBe(true);
    });
    test("Scooter is rented", () => {
      db.scooters[0].isCharging();
      expect(db.scooters[0].isFullyCharged).toBe(false);
    });
  });
});
