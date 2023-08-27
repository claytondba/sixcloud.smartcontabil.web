import { NgModule } from "@angular/core";
import { EmpresasComponent } from "./empresas.component";
import { CommonModule } from "@angular/common";
import { PoModule } from "@po-ui/ng-components";
import { PoPageDynamicTableModule } from "@po-ui/ng-templates";

@NgModule({
    declarations: [EmpresasComponent],
    exports:[EmpresasComponent],
    imports:[
        CommonModule,
        PoModule,
        PoPageDynamicTableModule
    ]
})
export class EmpresasModule { }