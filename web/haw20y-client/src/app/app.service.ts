import {EventEmitter, Inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoginHelper} from './models/loginhelper';
import {User} from './models/user';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AppService {

  public loginHelper: LoginHelper;
  public userLoggedIn = false;
  private subject: Subject<User> = new Subject<User>();
  private devSubject: Subject<boolean> = new Subject<boolean>();
  public event: EventEmitter<any>;
  public http;

  private redirectUrl: string;

  constructor(private router: Router,
              @Inject(HttpClient) http: HttpClient,
              @Inject('Window') window?: any,
              ) {
    this.http = http;
    this.event = new EventEmitter<any>();
    this.redirectUrl = '/login';
    this.loginUser();
  }

  private loginUser() {
  }
}
