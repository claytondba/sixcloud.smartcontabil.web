import { Component } from "@angular/core";

import { PoBreadcrumb } from "@po-ui/ng-components";
import { PoPageDynamicTableActions, PoPageDynamicTableCustomTableAction } from "@po-ui/ng-templates";
import { GissService } from "./giss.service";

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
          label: 'Guia de Prestados',
          icon: 'po-icon-download',
          action: this.downloadGuiaPrestados.bind(this),
        },
        {
            label: 'Livro Prestados',
            icon: 'po-icon-download',
            action: this.downloadLivroPrestados.bind(this),
        },
        {
            label: 'Livro Tomados',
            icon: 'po-icon-download',
            action: this.downloadLivroTomados.bind(this),
        },
        {
            label: 'Guias/Certificados',
            icon: 'po-icon-download',
            action: this.downloadGuiaTomados.bind(this),
        },
        {
            label: 'Aceite de Notas',
            icon: 'po-icon-download'
            //action: this.onClickEmpresaDetail.bind(this),
        },
        
      ];

      constructor(private gissService: GissService ) { }

      downloadLivroPrestados(giss: any)
      {
        console.log(giss.id);
            this.gissService.getDocument(giss.id, 'livro-prestados').subscribe(file => {
                this.downloadFile(giss.cnpj + "-" + giss.competencia + "-livro-prestados.csv", file);
            });
      }

      downloadGuiaPrestados(giss: any)
      {
        console.log(giss.id);
            this.gissService.getDocument(giss.id, 'guia-prestados').subscribe(file => {
                this.downloadFile(giss.cnpj + "-" + giss.competencia + "-guia-prestados.rar", file);
            });
      }

      downloadGuiaTomados(giss: any)
      {
        console.log(giss.id);
            this.gissService.getDocument(giss.id, 'guia-tomados').subscribe(file => {
                this.downloadFile(giss.cnpj + "-" + giss.competencia + "-guia_tomados.rar", file);
            });
      }

      downloadLivroTomados(giss: any)
      {
        console.log(giss.id);
            this.gissService.getDocument(giss.id, 'livro-tomados').subscribe(file => {
                this.downloadFile(giss.cnpj + "-" + giss.competencia + "-livro_tomados.rar", file);
            });
      }

      downloadAceiteTomados(giss: any)
      {
        console.log(giss.id);
            this.gissService.getDocument(giss.id, 'rel_notas_emit').subscribe(file => {
                this.downloadFile(giss.cnpj + "-" + giss.competencia + "-rel_notas_emit.xls", file);
            });
      }

      downloadFile(name: string, data: Text)
      {
  
          console.log(data);
            const linkSource = 'data:application/octet-stream;base64,' + data;
            //const linkSource = data;
            const downloadLink = document.createElement("a");
            const fileName = name;
  
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
      }

}