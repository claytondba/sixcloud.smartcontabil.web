import { Component } from "@angular/core";
import { PoBreadcrumb, PoDynamicFormField } from "@po-ui/ng-components";
import { PoPageDynamicEditActions, PoPageDynamicEditLiterals } from "@po-ui/ng-templates";

@Component({
    selector:'sixcloud-empresa-edit',
    templateUrl:'./empresa-edit.component.html',
    styleUrls:['./empresa-edit.component.css']
})
export class EmpresaEditComponent{

    public readonly serviceApi = 'https://po-sample-api.fly.dev/v1/people';

    public readonly fields: Array<PoDynamicFormField> = [
        { property: 'status', divider: 'Status', options: ['active', 'inactive'] },
        { property: 'id', label: 'User ID', key: true, required: true },
        { property: 'name', divider: 'Personal data', required: true },
        { property: 'nickname' },
        { property: 'email', label: 'E-mail' },
        { property: 'birthdate', label: 'Birth date', type: 'date' },
        { property: 'genre', options: ['female', 'male', 'others'], gridLgColumns: 6 },
        { property: 'nationality' },
        { property: 'birthPlace', label: 'Place of birth' },
        { property: 'graduation' },
        {
          property: 'father',
          label: 'Father`s name',
          divider: 'Relationship',
          gridMdColumns: 4,
          gridLgColumns: 4
        },
        {
          property: 'mother',
          label: 'Mother`s name',
          offsetMdColumns: 4,
          offsetLgColumns: 4,
          gridMdColumns: 4,
          gridLgColumns: 4
        },
        {
          property: 'street',
          divider: 'Address',
          gridColumns: 4
        },
        {
          property: 'city',
          optionsService: 'https://po-sample-api.fly.dev/v1/cities?transform=true',
          offsetColumns: 4,
          gridColumns: 4
        }
      ];

      public readonly breadcrumb: PoBreadcrumb = {
        items: [
          { label: 'Home', link: '/' },
          { label: 'Cadastro de Empresas', link: '/empresas' },
          { label: 'Editar' }
        ]
      };


      public readonly actions: PoPageDynamicEditActions = {
        save: '/documentation/po-page-dynamic-detail',
        saveNew: '/documentation/po-page-dynamic-edit'
      };
    
      public readonly literals: PoPageDynamicEditLiterals = {
        pageActionCancel: 'Descartar',
        pageActionSave: 'Gravar',
        pageActionSaveNew: 'Gravar e novo'
      };
}