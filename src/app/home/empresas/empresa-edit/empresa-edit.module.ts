import { NgModule } from "@angular/core";
import { EmpresaEditComponent } from "./empresa-edit.component";
import { CommonModule } from "@angular/common";
import { PoModule } from "@po-ui/ng-components";
import { PoPageDynamicEditModule, PoPageDynamicTableModule } from "@po-ui/ng-templates";

@NgModule({
    declarations: [EmpresaEditComponent],
    exports:[EmpresaEditComponent],
    imports:[
        CommonModule,
        PoModule,
        PoPageDynamicEditModule
    ]
})
export class EmpresaEditModule { }