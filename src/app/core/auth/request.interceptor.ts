import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, map, Observable, throwError } from "rxjs";
import { TokenService } from "../token/token.service";
import { UserService } from "../user/user.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor{

  constructor (private tokenService: TokenService,
               private userService: UserService,
               private router: Router) {



  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(this.tokenService.hasToken()) {
      //console.log(req); debug
      const token = this.tokenService.getToken();
      req = req.clone({
            setHeaders: { 'Authorization' : 'Bearer ' + token }
      })

    }
    return next.handle(req).pipe(catchError( (error) => {

      if(error.status == 401)
      {
          this.tokenService.removeToken();
          this.userService.logout();
          this.router.navigate(['/']);
          return error;
      }
      else if(error.status == 0)
      {
          console.log('erro = 0!');
          console.log(error);
          this.userService.logout();
          this.tokenService.removeToken();
          this.router.navigate(['/']);
      }
      else
      {
          console.log('Erro não tratado no interceptor');
          console.log(error);
      }

    })) as Observable<HttpEvent<any>>;
  }

}
