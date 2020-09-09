import faker from 'faker';

// export it so that it can be used outside of this file
export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    // You have to initialize the object - you can't just do this.location.lat = ...
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h3>COMPANY NAME: ${this.companyName}</h3>
      <h4>CATCH PHRASE: ${this.catchPhrase}</h4>
    </div>`;
  }
}
