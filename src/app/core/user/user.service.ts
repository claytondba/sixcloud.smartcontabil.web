import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TokenService } from "../token/token.service";
import { User } from "./user";
import jwt_decode from 'jwt-decode';
import { Router } from "@angular/router";


@Injectable({
  providedIn:'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User | null>(null);
  private userLogged = new BehaviorSubject<boolean>(false);

  constructor(private tokenService: TokenService, private router: Router){

    if(this.tokenService.hasToken())
      this.decodeAndNotify();
  }

  setToken(token: string){

    this.tokenService.setToken(token);
    this.decodeAndNotify();

  }

  getUser(){

    return this.userSubject.asObservable();

  }

  private decodeAndNotify() {

    const token: string = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
    this.userLogged.next(true);

  }

  logout() {

    this.tokenService.removeToken();
    this.userSubject.next(null);
    this.userLogged.next(false);
    this.router.navigate(['']);

  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  get isLoggedIn() {
    return this.userLogged.asObservable();
  }

}
