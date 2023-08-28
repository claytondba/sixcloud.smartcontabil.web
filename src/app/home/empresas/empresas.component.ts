import { Component, ViewChild } from "@angular/core";
import { PoBreadcrumb, PoDynamicViewField, PoModalComponent } from "@po-ui/ng-components";
import { PoPageDynamicSearchLiterals, PoPageDynamicTableActions, PoPageDynamicTableCustomTableAction } from "@po-ui/ng-templates";

@Component({
    selector: './sixcloud-empresas',
    templateUrl: './empresas.component.html',
    styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {

    @ViewChild('empresaDetailModal') empresaDetailModal!: PoModalComponent;

    readonly serviceApi = 'https://localhost:7109/Empresas/EmpresasUI';
    detailedEmpresa: any;
    
    readonly breadcrumb: PoBreadcrumb = {
        items: [{ label: 'Home', link: '/home' }, { label: 'Cadastro de Empresas' }]
    };
    readonly actions: PoPageDynamicTableActions = {

        new: '/empresa-edit/',
        removeAll: true,
        edit: '/empresa-edit/:id'
    
    };


    readonly detailFields: Array<PoDynamicViewField> = [
      { property: 'razao', label: 'Razão Social', divider: 'Dados Gerais', gridColumns: 6},
      { property: 'fatasia', label: 'Nome Fantasia', gridColumns: 6 },
      { property: 'cnpj', label: 'CNPJ'},
      { property: 'tel', label: 'Tel' },
      { property: 'contato', label: 'Contato'},
      { property: 'smart_cnd', label: 'Certidão Federal (103)', divider: 'Processamento RPA CNDs' },
      { property: 'smart_cnd', label: 'Certidão Federal (103)'}
    ];
  

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
          label: 'Detalhes',
          //icon: 'po-icon-user',
          action: this.onClickEmpresaDetail.bind(this),
        },
      ];

    private onClickEmpresaDetail(hotel: any) {

      this.detailedEmpresa = hotel;
      this.empresaDetailModal.open();
      
    }  
}