import {EventEmitter, Inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoginHelper} from './models/loginhelper';
import {User} from './models/user';
import {Subject} from 'rxjs/Subject';
import {map} from 'rxjs/operators';
import {UserLogin} from './models/UserLogin';
import {UserMock} from './login/UserMock';

@Injectable()
export class AppService {

  public loginHelper: LoginHelper;
  public userLoggedIn = false;
  private subject: Subject<User> = new Subject<User>();
  private devSubject: Subject<boolean> = new Subject<boolean>();
  private loggedInUser: UserLogin;
  private mockUser = UserMock.dummy;
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
  }


  public login(email: string, password: string) {
    return this.http.post('service/users/authenticate', new UserLogin(email, password))
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        } else {
          localStorage.setItem('currentUser', JSON.stringify(this.mockUser));
        }
        this.userLoggedIn = true;
        return user;
      }));
  }

}
