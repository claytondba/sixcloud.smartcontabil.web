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
                { label: 'GISS - Fechamentos' }]
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
            label: 'Reprocessar',
            icon: 'po-icon-settings'
            //action: this.onClickEmpresaDetail.bind(this),
        },
        {
          label: 'Gua de Prestados',
          icon: 'po-icon-download'
          //action: this.onClickEmpresaDetail.bind(this),
        },
        {
            label: 'Livro Prestados',
            icon: 'po-icon-download'
            //action: this.onClickEmpresaDetail.bind(this),
        },
        {
            label: 'Livro Tomados',
            icon: 'po-icon-download'
            //action: this.onClickEmpresaDetail.bind(this),
        },
        {
            label: 'Guias/Certificados',
            icon: 'po-icon-download'
            //action: this.onClickEmpresaDetail.bind(this),
        },
        {
            label: 'Aceite de Notas',
            icon: 'po-icon-download'
            //action: this.onClickEmpresaDetail.bind(this),
        },
        
      ];



}