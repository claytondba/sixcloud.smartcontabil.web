import { Component } from '@angular/core';

import { PoMenuItem, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';
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
  userName: string = "";

 constructor (private userService: UserService) {
  this.user$ = userService.getUser();
  this.isLoggedIn$ = this.userService.isLoggedIn;
  this.user$.subscribe( x => {this.userInfo = x, this.userName = x?.name as string} );

 }
 logOut() {
  this.userService.logout();
 }
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) }
  ];
  private onClick() {
    alert('Clicked in menu item')
  };

  profile: PoToolbarProfile = {

    avatar: 'https://po-ui.io/assets/graphics/logo-po.png',
    subtitle: 'dev@pdev.com.br',
    title: 'Smartontabil'
  };
  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-user', label: 'Perfil' },
    { icon: 'po-icon-company', label: 'Info da Empresa' },
    { icon: 'po-icon-settings', label: 'Configuracões'},
    { icon: 'po-icon-exit', label: 'Logout', type: 'danger', separator: true, action: () => this.logOut() }
  ];
  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon po-icon-message',
      label: 'Processamento CND',
      type: 'info'
    },
    { 
      icon: 'po-icon po-icon-message', 
      label: 'Processamento GISS', 
      type: 'info',
    }
  ];

  actions: Array<PoToolbarAction> = [
    { label: 'Start cash register'},
    { label: 'Finalize cash register'},
    { label: 'Cash register options'}
  ];

}
