import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';
import { UserService } from './core/user/user.service';
import { Observable } from 'rxjs';
import { User } from './core/user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn$: Observable<boolean>;

  user$: Observable<User| null>;
  userInfo: User | null = null;
  
 constructor (private userService: UserService) {
  this.user$ = userService.getUser();
  this.isLoggedIn$ = this.userService.isLoggedIn;

 }
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];
  private onClick() {
    alert('Clicked in menu item')
  }

}
