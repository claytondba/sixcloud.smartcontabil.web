import { NgModule } from "@angular/core";
import { PoModule } from "@po-ui/ng-components";
import { LoginComponent } from "./login.component";
import { PoPageLoginModule } from "@po-ui/ng-templates";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [LoginComponent],
    exports:[LoginComponent],
    imports:[
        CommonModule,
        PoModule, 
        PoPageLoginModule
    ]
})
export class LoginModule {

}