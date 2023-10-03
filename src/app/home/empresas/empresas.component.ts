import { HttpClient } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { PoBreadcrumb, PoDynamicViewField, PoModalComponent } from "@po-ui/ng-components";
import { PoPageDynamicSearchLiterals, PoPageDynamicTableActions, PoPageDynamicTableCustomAction, PoPageDynamicTableCustomTableAction, PoPageDynamicTableFilters } from "@po-ui/ng-templates";

@Component({
    selector: './sixcloud-empresas',
    templateUrl: './empresas.component.html',
    styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {

    @ViewChild('empresaDetailModal') empresaDetailModal!: PoModalComponent;

    //readonly serviceApi = 'https://localhost:7109/api/v1/empresas';
    readonly serviceApi = 'https://rpa.devplus.com.br/api/v1/empresas';


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
      { property: 'cnpj', label: 'CNPJ', format:'99.999.999/9999-99'},
      { property: 'tel', label: 'Tel' },
      { property: 'contato', label: 'Contato'},
      { property: 'smart_cnd', label: 'Certidão Federal (103)', divider: 'Processamento RPA CNDs' },
    ];
  

    readonly fields: Array<PoPageDynamicTableFilters> = [
      { property: 'id', key: true, visible: false },
      { property: 'razao', label: 'Nome' },
      { property: 'fantasia', label: 'Fantasia', sortable: true },
      { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99'},
      { property: 'tel', label: 'Telefone' },
      { property: 'contato', label: 'Contato' }
    ];

    constructor(private http: HttpClient) {

    }
    pageCustomActions: Array<PoPageDynamicTableCustomAction> = [
      {
        label: 'Download .csv',
        action: this.downloadCsv.bind(this, this.serviceApi),
        icon: 'po-icon-download'
      }];
      
    tableCustomActions: Array<PoPageDynamicTableCustomTableAction> = [
        {
          label: 'Detalhes',
          //icon: 'po-icon-user',
          action: this.onClickEmpresaDetail.bind(this),
        }
      ];

    private onClickEmpresaDetail(hotel: any) {

      this.detailedEmpresa = hotel;
      this.empresaDetailModal.open();
      
    }
    downloadCsv(endpoint: any) {

      console.log(endpoint);

      this.http.get('https://rpa.devplus.com.br/api/v1/empresas?page=1&pageSize=99999')
               .subscribe((data: any) => {
        const csvStr = this.parseJsonToCsv(data['items']);
        const dataUri = 'data:text/csv;charset=utf-8,' + csvStr;
  
        const exportFileDefaultName = 'smart-empresas.csv';
  
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
      });
    }

    parseJsonToCsv(jsonData = []) {
      if (!jsonData.length) {
        return '';
      }
  
      const keys = Object.keys(jsonData[0]);
      const columnDelimiter = ',';
      const lineDelimiter = '\n';
      const csvColumnHeader = keys.join(columnDelimiter);
  
      const csvStr = jsonData.reduce((accCsvStr, currentItem) => {
        keys.forEach((key, index) => {
          if (index && index < keys.length - 1) {
            accCsvStr += columnDelimiter;
          }
  
          accCsvStr += currentItem[key];
        });
  
        return accCsvStr + lineDelimiter;
      }, csvColumnHeader + lineDelimiter);
  
      return encodeURIComponent(csvStr);
    }  
}