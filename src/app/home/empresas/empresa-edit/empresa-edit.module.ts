import { NgModule } from "@angular/core";
import { EmpresaEditComponent } from "./empresa-edit.component";
import { CommonModule } from "@angular/common";
import { PoDynamicViewField, PoModule } from "@po-ui/ng-components";
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
export class EmpresaEditModule {

    readonly detailFields: Array<PoDynamicViewField> = [
        { property: 'razao', label: 'Razão Social', divider: 'Dados Gerais', gridColumns: 6},
        { property: 'fatasia', label: 'Nome Fantasia', gridColumns: 6},
        { property: 'cnpj', label: 'CNPJ'},
        { property: 'tel', label: 'Tel' },
        { property: 'contato', label: 'Contato'},
      ];
  

 }