import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { PoModule } from "@po-ui/ng-components";
import { CommonModule } from "@angular/common";
import { LoginModule } from "./login/login.module";
import { StatusRpaModule } from "./staus-rpa/staus-rpa.module";
import { DashModule } from "./dash/dash.module";
import { EmpresasModule } from "./empresas/empresas.component.module";
import { CertidaoModule } from "./certidoes/certidao.module";

@NgModule({
    declarations:[
        
    ],
    imports:[
        LoginModule,
        StatusRpaModule, 
        DashModule,
        EmpresasModule, 
        CertidaoModule
    ],
    exports:[
        
    ]
})
export class HomeModule { }