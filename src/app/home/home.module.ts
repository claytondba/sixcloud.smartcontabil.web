import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { PoModule } from "@po-ui/ng-components";
import { CommonModule } from "@angular/common";
import { LoginModule } from "./login/login.module";
import { StatusRpaModule } from "./staus-rpa/staus-rpa.module";

@NgModule({
    declarations:[
        
    ],
    imports:[
        LoginModule,
        StatusRpaModule
    ],
    exports:[
        
    ]
})
export class HomeModule { }