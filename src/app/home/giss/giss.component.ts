import { Component } from "@angular/core";

import { PoBreadcrumb } from "@po-ui/ng-components";
import { PoPageDynamicTableActions, PoPageDynamicTableCustomTableAction } from "@po-ui/ng-templates";

@Component({
    selector: 'sixcloud-giss',
    templateUrl: './giss.component.html',
    styleUrls: ['./giss.component.css']
})
export class GissComponent {



    readonly serviceApi = 'https://rpa.devplus.com.br/ConsultaGISS/GissUI';

    readonly breadcrumb: PoBreadcrumb = {
        items: [{ label: 'Home', link: '/home' }, 
                { label: 'Consulta de Certidões' }]
    };

    readonly fields: Array<any> = [
        { property: 'id', key: true, visible: false },
        { property: 'competencia', label: 'Competencia' },
        { property: 'obrigacao', label: 'Certidão' },
        { property: 'cnpj', label: 'CNPJ' },
        { property: 'cstat', label: 'Status' },
        { property: 'observacao', label: 'Observacao' },
        { property: 'tempo', label: 'Tempo (Seg)' },
        { property: 'instance_name', label: 'RPA' }
      ];
      readonly actions: PoPageDynamicTableActions = {
        removeAll: true,
        //edit: '/empresa-edit/:id'
    
    };
    tableCustomActions: Array<PoPageDynamicTableCustomTableAction> = [
        {
          label: 'Visualizar',
          icon: 'po-icon po-icon-eye'
          //action: this.onClickEmpresaDetail.bind(this),
        },
        {
            label: 'Reprocessar',
            icon: 'po-icon-settings'
            //action: this.onClickEmpresaDetail.bind(this),
        },
        {
            label: 'Download',
            icon: 'po-icon-download'
            //action: this.onClickEmpresaDetail.bind(this),
        },
      ];



}