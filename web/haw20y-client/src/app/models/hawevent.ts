import {Student} from './student';
import {Country} from '../admin/admin.component';

export class HawEvent {
  title: string;
  subtitle?: string;
  description: string;
  dateCreated: Date;
  dateOfEvent: Date;
  guestList: Student[];
  location: Country;
  imgSource: string;
  id: number;
  imageName: string;
  image: File;
  enabled: boolean;
}
