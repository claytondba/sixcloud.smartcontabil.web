import { Component } from "@angular/core";
import { PoBreadcrumb } from "@po-ui/ng-components";

@Component({
    selector: 'sixcloud-certidao',
    templateUrl: './certidao.component.html',
    styleUrls: ['./certidao.component.css']
})
export class CertidaoComponent {

    readonly serviceApi = 'https://localhost:7109/ConsultaCnd/CertidaoUI';

    readonly breadcrumb: PoBreadcrumb = {
        items: [{ label: 'Home', link: '/home' }, 
                { label: 'Consulta de Certidões' }]
    };

    readonly fields: Array<any> = [
        { property: 'id', key: true, visible: false },
        { property: 'obrigacao', label: 'Certidão' },
        { property: 'cnpj', label: 'CNPJ' },
        { property: 'competencia', label: 'Competencia' },
        { property: 'observacao', label: 'Observacao' },
        { property: 'tempo', label: 'Tempo (Seg)' },
        { property: 'instance_name', label: 'RPA' }
      ];
  
}