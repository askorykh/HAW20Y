import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {HawEvent} from '../models/hawevent';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  eventForm: FormGroup;

  displayedColumns = ['id', 'name', 'country', 'actions'];

  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  isNewEvent: Boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  public events = [
    {
      id: 0,
      dateCreated: new Date(),
      title: 'HAW 20 Years',
      dateOfEvent: new Date(),
      location: {id: 1, name: 'Brazil'},
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Suspendisse id iaculis purus, vel ullamcorper nisi. ' +
      'Donec hendrerit nisl eget neque laoreet mollis. ' +
      'Duis suscipit metus ex. In hac habitasse platea dictumst. ' +
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
      imageName: '',
      image: null,
      enabled: true
    },
    {
      id: 0,
      dateCreated: new Date(),
      title: 'HAW 20 Years',
      dateOfEvent: new Date(),
      location: {id: 1, name: 'Brazil'},
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Suspendisse id iaculis purus, vel ullamcorper nisi. ' +
      'Donec hendrerit nisl eget neque laoreet mollis. ' +
      'Duis suscipit metus ex. In hac habitasse platea dictumst. ' +
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
      imageName: '',
      image: null,
      enabled: true
    },
    {
      id: 0,
      dateCreated: new Date(),
      title: 'HAW 20 Years',
      dateOfEvent: new Date(),
      location: {id: 1, name: 'Brazil'},
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Suspendisse id iaculis purus, vel ullamcorper nisi. ' +
      'Donec hendrerit nisl eget neque laoreet mollis. ' +
      'Duis suscipit metus ex. In hac habitasse platea dictumst. ' +
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
      imageName: '',
      image: null,
      enabled: true
    },
    {
      id: 0,
      dateCreated: new Date(),
      title: 'HAW 20 Years',
      dateOfEvent: new Date(),
      location: {id: 1, name: 'Brazil'},
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Suspendisse id iaculis purus, vel ullamcorper nisi. ' +
      'Donec hendrerit nisl eget neque laoreet mollis. ' +
      'Duis suscipit metus ex. In hac habitasse platea dictumst. ' +
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
      imageName: '',
      image: null,
      enabled: true
    },
    {
      id: 0,
      dateCreated: new Date(),
      title: 'HAW 20 Years',
      dateOfEvent: new Date(),
      location: {id: 1, name: 'Brazil'},
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Suspendisse id iaculis purus, vel ullamcorper nisi. ' +
      'Donec hendrerit nisl eget neque laoreet mollis. ' +
      'Duis suscipit metus ex. In hac habitasse platea dictumst. ' +
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ',
      imageName: '',
      image: null,
      enabled: true
    }];

  countries = [{id: 1, name: 'Brazil'}, {id: 2, name: 'Moldova'}, {id: 3, name: 'Azerbaijan'}, {
    id: 4,
    name: 'Oleksiland'
  }, {id: 5, name: 'Saakerland'}];

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.createEventForm();
  }

  /**
    * Set the paginator after the view init since this component will
    * be able to query its view for the initialized paginator.
  */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
  }

  onEvents() {
    this.router.navigate(['events']);
  }

  onLogout() {
    this.router.navigate(['home']);
  }

  createEventForm() {
    this.eventForm = this.formBuilder.group({
      event: [''],
      eventTitle: [''],
      eventLocation: [''],
      eventDate: [''],
      eventDescription: ['']
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onDeleteUser(element: Element) {
    console.log(element);
  }

  onSubmitEvent() {
    console.log(this.eventForm);
  }

  onSearchUser() {
  }

  onEventSelect(event: HawEvent) {
    if (typeof event !== 'undefined') {
      this.isNewEvent = false;
      this.eventForm.reset({
        eventTitle: event.title,
        eventLocation: event.location.id,
        eventDate: event.dateOfEvent,
        eventDescription: event.description
      });
    } else {
      this.isNewEvent = true;
      this.eventForm = this.formBuilder.group({
        event: [''],
        eventTitle: [''],
        eventLocation: [''],
        eventDate: [''],
        eventDescription: ['']
      });
    }
  }
}

export interface Element {
  id: number;
  name: string;
  country: Country;
}

export interface Country {
  id: number;
  name: string;
}

const ELEMENT_DATA: Element[] = [
  {id: 0, name: 'Italo Costa Martins', country: {id: 0, name: 'Brazil'}},
  {id: 1, name: 'Nizami Zamanov', country: {id: 1, name: 'Arzebajan'}},
  {id: 2, name: 'Lorant Vrinceanu', country: {id: 2, name: 'Moldova'}},
  {id: 3, name: 'Oleksi IDontCare', country: {id: 3, name: 'Oleksiland'}},
  {id: 4, name: 'Saaker Whatever', country: {id: 4, name: 'Saakerland'}},
  {id: 5, name: 'Leutlt Nope', country: {id: 5, name: 'Nopeland'}},
  {id: 6, name: 'Dummy Dumber', country: {id: 6, name: 'Dumbland'}},
]
