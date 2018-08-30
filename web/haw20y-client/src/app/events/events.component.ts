import {Component, OnInit} from '@angular/core';
import {HawEvent} from '../models/hawevent';
import {Student} from '../models/student';
import {PageEvent} from '@angular/material';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: HawEvent[] = [];

  initialIndex = 0;

  finalIndex = 4;

  sizeList = 0;

  currentPage = 0;

  constructor() {
    const mockEvent = new HawEvent();
    const mockGuest = new Student();
    mockEvent.title = 'HAW 20 Years Alumni Meeting';
    mockEvent.subtitle = '';
    mockEvent.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
      'Suspendisse id iaculis purus, vel ullamcorper nisi. ' +
      'Donec hendrerit nisl eget neque laoreet mollis. ' +
      'Duis suscipit metus ex. In hac habitasse platea dictumst. ' +
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. ';
    mockEvent.imgSource = '../../assets/img/haw_event.jpg';
    mockEvent.guestList = [mockGuest];
    for (let i = 0; i <= 10; i++) {
      this.events.push(mockEvent);
    }
    this.sizeList = this.events.length;
  }

  ngOnInit() {
  }

  onPageEvent(event: PageEvent) {
    if (this.currentPage < event.pageIndex) {
      this.initialIndex += event.pageSize;
      this.finalIndex += event.pageSize;
    } else if (this.currentPage > event.pageIndex) {
      this.initialIndex -= event.pageSize;
      this.finalIndex -= event.pageSize;
    }
    this.currentPage = event.pageIndex;
  }

}
