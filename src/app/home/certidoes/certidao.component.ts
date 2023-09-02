import { Component, ViewChild } from "@angular/core";
import { PoBreadcrumb, PoModalComponent } from "@po-ui/ng-components";
import { PoPageDynamicTableActions, PoPageDynamicTableCustomTableAction } from "@po-ui/ng-templates";
import { Certidao } from "./certidao";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { CertidoesService } from "./certidao.service";

@Component({
    selector: 'sixcloud-certidao',
    templateUrl: './certidao.component.html',
    styleUrls: ['./certidao.component.css']
})
export class CertidaoComponent {

    @ViewChild('certidaoDetailModal') certidaoDetailModal!: PoModalComponent;

    certidaoEdit: Certidao | null = null;
    encodedReport: string = '';
    safeEncodedReport: SafeResourceUrl | null;
    isHideLoading: boolean = true;

    readonly serviceApi = 'https://rpa.devplus.com.br/ConsultaCnd/CertidaoUI';

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
          icon: 'po-icon po-icon-eye',
          action: this.visualizaCertidao.bind(this),
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

      constructor(private certidaoService: CertidoesService,
                  private sanitizer: DomSanitizer,){

        this.safeEncodedReport = null;

      }

      visualizaCertidao(certidao: any){

            this.isHideLoading = false;
            this.certidaoEdit = certidao as Certidao;
            console.log(certidao);
            this.certidaoService.getDocument(this.certidaoEdit.id).subscribe(file => {
                certidao.arquivo = file;

                if(certidao.filetype == 'png')
                  this.encodedReport = 'data:image/png;base64,' + certidao.arquivo;
                else
                {
                  this.safeEncodedReport = this.sanitizer.bypassSecurityTrustResourceUrl('data:application/pdf;base64,' + certidao.arquivo.toString());
                }

                this.certidaoDetailModal.open();
                this.isHideLoading = true;
            });

      }
      
}