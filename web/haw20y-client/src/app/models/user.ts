import {GeoObject} from './geoObject';

export class User {
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
}
