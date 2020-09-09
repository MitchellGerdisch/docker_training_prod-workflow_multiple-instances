// import the User class
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
console.log(user);
console.log(company);

const map = new CustomMap('map');
map.addMarker(user); // the user object/class needs to satisfy the interface defined in CustomMap
map.addMarker(company); // the company object/class needs to satisfy the interface defined in CustomMap
