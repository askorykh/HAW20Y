import {GeoObject} from './geoObject';

export class UserLogin {
  id: number;
  roleId: number;
  codeId: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gradYear: string;
  isAdmin: boolean;
  geoLocationIn?: GeoObject;
  geoLocationFin?: GeoObject;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
