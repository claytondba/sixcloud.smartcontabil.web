import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PoDialogService } from "@po-ui/ng-components";
import { PoPageLogin } from "@po-ui/ng-templates";
import { AuthService } from "src/app/core/auth/auth.service";

@Component({
    selector:'sixcloud-login',
    templateUrl:'./login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private poDialog: PoDialogService,
        private authService: AuthService,
        private router: Router) {}

    loginSubmit(formData: PoPageLogin) {

        this.authService
        .authenticate(formData.login, formData.password)
        .subscribe(() => {
          console.log('logou');
          this.router.navigate(['status']);
        },
          err => {
            console.log(err);
          })
      }

}