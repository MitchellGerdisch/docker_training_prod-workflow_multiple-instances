import faker from 'faker';

// export it so that it can be used outside of this file
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    // You have to initialize the object - you can't just do this.location.lat = ...
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `USER: ${this.name}`;
  }
}
