import { Component, ViewChild } from "@angular/core";

import { PoBreadcrumb, PoModalComponent, PoTableAction, PoTableColumn } from "@po-ui/ng-components";
import { PoPageDynamicTableActions, PoPageDynamicTableCustomTableAction } from "@po-ui/ng-templates";
import { GissService } from "./giss.service";
import { SmartSyncService } from "src/app/core/smart-sync/smart-sync.service";
import { SmartFile } from "src/app/core/smart-sync/smart-file";

@Component({
    selector: 'sixcloud-giss',
    templateUrl: './giss.component.html',
    styleUrls: ['./giss.component.css']
})
export class GissComponent {

    readonly serviceApi = 'https://rpa.devplus.com.br/ConsultaGISS/GissUI';

    @ViewChild('filesDetailModal') filesDetailModal!: PoModalComponent;

    readonly breadcrumb: PoBreadcrumb = {
        items: [{ label: 'Home', link: '/home' }, 
                { label: 'GISS - Fechamentos' }]
    };

    listFiles: any[] = [];

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
      readonly fieldsFiles: PoTableColumn[] = [
        { property: 'tenantId', label: 'tenantId', visible: false },
        { property: 'tokenProcess', label: 'tokenProcess', visible: false  },
        { property: 'instanceGenerateName', label: 'instanceGenerateName', visible: false },
        
        { property: 'fileName', label: 'Arquivos' },
        { property: 'fileExtension', label: 'Tipo de Arquivo' },
        { property: 'competence', label: 'Competência' }
        
      ];
      readonly actions: PoPageDynamicTableActions = {
        removeAll: true,
        //edit: '/empresa-edit/:id'
    
    };


    tableFilesCustomActions: Array<PoTableAction> = [
        {
            label: 'Download',
            icon: 'po-icon-settings',
            action: this.downloadFileSmartSync.bind(this),

        }];


    tableCustomActions: Array<PoPageDynamicTableCustomTableAction> = [
        {
            label: 'Verificar Arquivos',
            icon: 'po-icon-archive',
            action: this.onClickEmpresaDetail.bind(this),
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

      constructor(private gissService: GissService, 
                  private smartSyncService: SmartSyncService ) { 

                  }

      onClickEmpresaDetail(giss: any)
      {
        //this.filesDetailModal.open();
            this.smartSyncService.getListFiles(giss.token).subscribe( files => {

                this.listFiles = files;
                console.log(files);
                this.filesDetailModal.open();

            });
            
      }

      downloadFileSmartSync(file: any)
      {
        console.log(file);
        this.smartSyncService.getFile(file.tokenProcess, file.competence, file.fileName)
                .subscribe( file => {

                    this.downloadFile(file.fileName + '.' + file.fileExtension, file.fileContent)

                });
      }



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