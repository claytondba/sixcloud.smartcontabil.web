import { NgModule } from "@angular/core";
import { EmpresasComponent } from "./empresas.component";
import { CommonModule } from "@angular/common";
import { PoModule } from "@po-ui/ng-components";
import { PoPageDynamicTableModule } from "@po-ui/ng-templates";
import { EmpresaEditComponent } from "./empresa-edit/empresa-edit.component";
import { EmpresaEditModule } from "./empresa-edit/empresa-edit.module";

@NgModule({
    declarations: [EmpresasComponent],
    exports:[EmpresasComponent],
    imports:[
        CommonModule,
        PoModule,
        PoPageDynamicTableModule,
        EmpresaEditModule
    ]
})
export class EmpresasModule { }