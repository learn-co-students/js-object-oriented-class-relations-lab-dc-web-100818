
let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    // insert in the driver to the store
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    });
  }

  passengers() {
   let passengersId = this.trips().map(trip => {
      return trip.passengerId
    });

    return store.passengers.filter((passenger) => {
      if (passengersId.includes(passenger.id)) {
        return passenger
      }
    })
  }
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;

    // insert in the passenger to the store
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    });
  }

  drivers() {
    let driversId = this.trips().map(trip => {
       return trip.driverId
     });
 
     return store.drivers.filter((driver) => {
       if (driversId.includes(driver.id)) {
         return driver
       }
     })
   }
}

let tripId = 0

  class Trip {
    constructor(driver, passenger) {
      this.driverId = driver.id;
      this.passengerId = passenger.id;
      this.id = ++tripId;
      // insert in the trip to the store
      store.trips.push(this);
    }

    passenger() {
      return store.passengers.find(passenger => {
        return passenger.id === this.passengerId;
      });
    }

    driver() {
      return store.drivers.find(driver => {
        return driver.id === this.driverId;
      });
    }

    
  }
