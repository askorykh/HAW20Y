import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  dataSource: any = [
    {id: 0, name: 'Italo Costa Martins', country: {id: 0, name: 'Brazil'}},
    {id: 1, name: 'Nizami Zamanov', country: {id: 1, name: 'Arzebajan'}},
    {id: 2, name: 'Lorant Vrinceanu', country: {id: 2, name: 'Moldova'}},
    {id: 3, name: 'Oleksi IDontCare', country: {id: 3, name: 'Oleksiland'}},
    {id: 4, name: 'Saaker Whatever', country: {id: 4, name: 'Saakerland'}},
    {id: 5, name: 'Leutlt Nope', country: {id: 5, name: 'Nopeland'}},
    {id: 6, name: 'Dummy Dumber', country: {id: 6, name: 'Dumbland'}},
  ];

  public events = [
    {
      id: 0,
      dateCreated: new Date(),
      title: 'HAW 20 Years',
      dateOfEvent: new Date(),
      location: {id: 0, name: 'Germany'},
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
      location: {id: 0, name: 'Germany'},
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
      location: {id: 0, name: 'Germany'},
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
      location: {id: 0, name: 'Germany'},
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
      location: {id: 0, name: 'Germany'},
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

  eventForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.createRegisterForm();
  }

  ngOnInit() {
  }

  onEvents() {
    this.router.navigate(['events']);
  }

  onLogout() {
    this.router.navigate(['home']);
  }

  createRegisterForm() {
    this.eventForm = this.formBuilder.group({
      event: [''],
      eventTitle: [''],
      eventLocation: [''],
      eventDate: [''],
      eventDescription: ['']
    });
  }

}
