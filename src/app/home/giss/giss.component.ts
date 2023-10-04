import { Component, ViewChild } from "@angular/core";

import { PoBreadcrumb, PoComboComponent, PoComboFilterMode, PoFilterMode, PoModalAction, PoModalComponent, PoNotificationService, PoTableAction, PoTableColumn, PoTagType } from "@po-ui/ng-components";
import { PoPageDynamicTableActions, PoPageDynamicTableCustomTableAction, PoPageDynamicTableFilters } from "@po-ui/ng-templates";
import { GissService } from "./giss.service";
import { SmartSyncService } from "src/app/core/smart-sync/smart-sync.service";
import { SmartFile } from "src/app/core/smart-sync/smart-file";
import { Giss } from "./giss";
import { PulseService } from "src/app/core/proc/pulse.service";
import { Pulse } from "src/app/core/proc/pulse";

@Component({
    selector: 'sixcloud-giss',
    templateUrl: './giss.component.html',
    styleUrls: ['./giss.component.css']
})
export class GissComponent {

    readonly serviceApi = 'https://rpa.devplus.com.br/ConsultaGISS/GissUI';

    @ViewChild('filesDetailModal') filesDetailModal!: PoModalComponent;
    @ViewChild('retryModal') retryModal!: PoModalComponent;
    @ViewChild('selectCombo') selectCombo!: PoComboComponent;

    readonly breadcrumb: PoBreadcrumb = {
        items: [{ label: 'Home', link: '/home' }, 
                { label: 'GISS - Fechamentos' }]
    };

    loadingText: string = 'Carregando...'
    listFiles: any[] = [];
    listInstances: Pulse[] = [];
    isLoading = false;
    typeFilter: PoFilterMode = 1;
    typeComboFilter: PoComboFilterMode = 1;
    tipoPrefeitura: string = '';
    gissEdit: Giss | null = null;
    acceptance: boolean = false;


    readonly fields: Array<PoPageDynamicTableFilters> = [
        { property: 'cstat', type: 'label', label: 'Status',
        labels: [
            { value: 100, type: PoTagType.Success, label: 'Finalizado', icon: 'po-icon-stock' },
            { value: 10, type: PoTagType.Warning, label: 'Em Processamento', icon: 'po-icon-stock' },
            { value: 1, type: PoTagType.Info, label: 'Aguardando', icon: 'po-icon-stock' },
            { value: 999, type: PoTagType.Danger, label: 'Não implementado', icon: 'po-icon-stock' },
            { value: 8, type: PoTagType.Danger, label: 'Erro', icon: 'po-icon-stock' }
          ]
        },
        { property: 'cod_ibge_mun', type: 'label', label: 'Município',
        labels: [
            { value: '3547809', color: '#745678', label: 'Santo André' },
            { value: '3548708', color: '#745678', label: 'São Bernardo' },
            { value: '3548807', color: '#745678', label: 'São Caetano' },
            { value: '3513801', color: '#745678', label: 'Diadema' },
            { value: '3543303', color: '#745678', label: 'Ribeirão Pires' },
            { value: '3543402', color: '#745678', label: 'Ribeirão Preto' },
            { value: '3523107', color: '#745678', label: 'Itaquaquecetuba' },
            { value: '3529401', color: '#745678', label: 'Mauá' },
            { value: '3519071', color: '#745678', label: 'Hortolandia' },
            { value: '3555406', color: '#745678', label: 'Ubatuba' },
            { value: '3550308', color: '#745678', label: 'São Paulo' },
            { value: '3522109', color: '#745678', label: 'Itanhaem' },
            { value: '3524402', color: '#745678', label: 'Jacareí' },
            { value: '3530102', color: '#745678', label: 'Mirandópolis' },
            { value: '3534401', color: '#745678', label: 'Osasco' },
            { value: '3530607', color: '#745678', label: 'Mogi das Cruzes' },
            { value: '3552809', color: '#745678', label: 'Taboão da Serra' }
            
          ]
        },
        { property: 'id', key: true, visible: false },
        { property: 'competencia', label: 'Competência' },
        { property: 'datahoraemissao', label: 'Processsamento', type: 'dateTime' },
        { property: 'obrigacao', label: 'obrigacao', visible: false },
        { property: 'cnpj', label: 'CNPJ', type: 'string', format: '99.999.999/9999-99'},
        { property: 'observacao', label: 'Observação' },
        { property: 'tempo', label: 'Tempo (Seg)', visible: false },
        { property: 'instance_name', label: 'RPA' }
      ];
      readonly fieldsFiles: PoTableColumn[] = [
        { property: 'tenantId', label: 'tenantId', visible: false },
        { property: 'tokenProcess', label: 'tokenProcess', visible: false  },
        { property: 'instanceGenerateName', label: 'instanceGenerateName', visible: false },
        
        { property: 'fileName', label: 'Arquivos' },
        { property: 'fileExtension', label: 'Tipo de Arquivo' },
        { property: 'competence', label: 'Competência' },
        { property: 'createdAt', label: 'Data Proces.' },
        
      ];
      readonly actions: PoPageDynamicTableActions = {
        removeAll: true,
        //edit: '/empresa-edit/:id'
    
    };


    tableFilesCustomActions: Array<PoTableAction> = [
        {
            label: 'Download',
            //icon: 'po-icon-settings',
            action: this.downloadFileSmartSync.bind(this),

        }];


    tableCustomActions: Array<PoPageDynamicTableCustomTableAction> = [
        {
            label: 'Verificar Arquivos',
            icon: 'po-icon-archive',
            action: this.onClickEmpresaDetail.bind(this),
        },
        {
            label: 'Reprocessar',
            icon: 'po-icon-settings',
            action: this.reprocessaRegistro.bind(this),
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
                  private poNotification: PoNotificationService,
                  private smartSyncService: SmartSyncService,
                  private pulseService: PulseService ) { 

        this.pulseService.listOperatorsByService(5).subscribe( operators => {

            this.listInstances = operators;
            
        });                    

      }

      checkReprocessa(event: boolean){

        if(event) {
            this.acceptance = true;
        }
        else {
            this.acceptance = false;
        }
        console.log(event);

      }

      onClickEmpresaDetail(giss: any)
      {
        //this.filesDetailModal.open();
        this.tipoPrefeitura = giss.cod_ibge_mun;
        this.isLoading = true;
            this.smartSyncService.getListFiles(giss.token).subscribe( files => {
                
                this.listFiles = files;
                console.log(files);
                this.filesDetailModal.open();
                this.isLoading = false;
            });
            
      }


      retryGiss(){

        if(this.acceptance)
        {
            if(!this.selectCombo.selectedValue)
            {
                this.poNotification.error('Informe um RPA ou desmarque a opção de Reprocessamento Avançado');
                return;
            }
        }

        let token = this.gissEdit?.token as string
        this.closeModal();
        //console.log(token);
        this.loadingText ='Solicitando reprocessamento...';
        this.isLoading = true;

        if(this.acceptance){
            
            this.gissService.advancedReTry(token, this.selectCombo.selectedValue as number).subscribe(x => {
                this.isLoading = false;
                this.loadingText ='Carregando';
                this.poNotification.information('Reprocessamento Avançado GISS Solicitado');
            });

        }
        else {

            this.gissService.reTry(token).subscribe(x => {
                this.isLoading = false;
                this.loadingText ='Carregando';
                this.poNotification.information('Reprocessamento GISS Solicitado');
            });
        }

      }

      reprocessaRegistro(giss: Giss){
        this.gissEdit = giss;
        this.retryModal.open();
      }


      close: PoModalAction = {
        action: () => {
            this.closeModal();
        },
        label: 'Cancelar',
        danger: true
      };

      confirm: PoModalAction = {
        action: () => {
            this.retryGiss();
        },
        label: 'Confirmar'
    };

    closeModal() {
        this.retryModal.close();
        this.gissEdit = null;
    }

    verifyOptions(){



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