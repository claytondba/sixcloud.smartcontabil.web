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

  loading: boolean = false;

    constructor(private poDialog: PoDialogService,
        private authService: AuthService,
        private router: Router) {}

    loginSubmit(formData: PoPageLogin) {

        this.loading = true;
        this.authService
        .authenticate(formData.login, formData.password)
        .subscribe(() => {
          console.log('logou');
          this.router.navigate(['home']);
        },
          err => {
            console.log(err);
            this.loading = false;
          })
      }

}