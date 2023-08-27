import { Component } from "@angular/core";

@Component({
    selector: './sixcloud-empresas',
    templateUrl: './empresas.component.html',
    styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent {
    readonly serviceApi = 'https://localhost:7109/Empresas/EmpresasUI';

    readonly fields: Array<any> = [
      { property: 'id', key: true, visible: false },
      { property: 'razao', label: 'Nome' },
      { property: 'fantasia', label: 'Fantasia', sortable: true },
      { property: 'cnpj', label: 'CNPJ' },
      { property: 'tel', label: 'Tel' },
      { property: 'contato', label: 'Contato' }
    ];
}