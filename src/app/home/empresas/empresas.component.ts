import { Component } from "@angular/core";
import { PoBreadcrumb } from "@po-ui/ng-components";
import { PoPageDynamicSearchLiterals, PoPageDynamicTableActions, PoPageDynamicTableCustomTableAction } from "@po-ui/ng-templates";

@Component({
    selector: './sixcloud-empresas',
    templateUrl: './empresas.component.html',
    styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {
    readonly serviceApi = 'https://rpa.devplus.com.br/Empresas/EmpresasUI';
    
    readonly breadcrumb: PoBreadcrumb = {
        items: [{ label: 'Home', link: '/home' }, { label: 'Cadastro de Empresas' }]
    };
    readonly actions: PoPageDynamicTableActions = {
        new: '/empresa-edit',
        removeAll: true,
        detail: '/empresa-edit',
        edit: '/empresa-edit/:id'
    
    };
    readonly fields: Array<any> = [
      { property: 'id', key: true, visible: false },
      { property: 'razao', label: 'Nome' },
      { property: 'fantasia', label: 'Fantasia', sortable: true },
      { property: 'cnpj', label: 'CNPJ' },
      { property: 'tel', label: 'Tel' },
      { property: 'contato', label: 'Contato' }
    ];
    tableCustomActions: Array<PoPageDynamicTableCustomTableAction> = [
        {
          label: 'Details',
          url: '/empresa-edit',
          icon: 'po-icon-user'
        },
        {
            label: 'Teste',
            icon: 'po-icon-user'
        },
      ];
}