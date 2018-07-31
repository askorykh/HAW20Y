/**
 * Helper class containing the instance of the current logged in user.
 */
import {User} from "./user";

export class LoginHelper {

  private loggedInUser: User;

  public routes: string[] = [];

  constructor(loggedInUser: User, links: any) {
    this.loggedInUser = loggedInUser;
  }

  public isAdminUser() {
    return this.loggedInUser.isAdmin;
  }

  public getCurrentUser() {
    return this.loggedInUser;
  }



}
