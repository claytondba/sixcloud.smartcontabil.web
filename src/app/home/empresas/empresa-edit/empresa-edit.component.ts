import { Component } from "@angular/core";
import { PoBreadcrumb, PoDynamicFormField } from "@po-ui/ng-components";
import { PoPageDynamicEditActions, PoPageDynamicEditBeforeSave, PoPageDynamicEditBeforeSaveNew, PoPageDynamicEditLiterals } from "@po-ui/ng-templates";

@Component({
    selector:'sixcloud-empresa-edit',
    templateUrl:'./empresa-edit.component.html',
    styleUrls:['./empresa-edit.component.css']
})
export class EmpresaEditComponent{

  
    //public readonly serviceApi = 'https://localhost:7109/api/v1/empresas';
    public readonly serviceApi = 'https://rpa.devplus.com.br/api/v1/empresas';

    public readonly fields: Array<PoDynamicFormField> = [
        { property: 'id', label: 'ID', divider: 'Dados Gerais', disabled: true, gridColumns: 2},
        { property: 'razao', label: 'Razão Social', gridColumns: 6, required: true },
        { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 4, required: true },
        { property: 'fantasia', label: 'Nome Fantasia', gridColumns: 6, required: true },
        { property: 'tel', mask: '(99) 99999-9999', label: 'Tel' },
        { property: 'contato', label: 'Contato'},

        { 
          property: 'smart_cnd', label: 'Certidão Federal (103)', 
          divider: 'Processamento RPA CNDs', 
          type: 'boolean', 
          booleanTrue: 'Ativado',
          booleanFalse: 'Desativado',
          required: true 
        },

        { 
          property: 'cnd_104', label: 'Regularidade FGTS (104)', 
          type: 'boolean', 
          booleanTrue: 'Ativado',
          booleanFalse: 'Desativado',
          required: true 
        },
        { 
          property: 'cnd_105', label: 'Debitos Trabalhistas (105)', 
          type: 'boolean', 
          booleanTrue: 'Ativado',
          booleanFalse: 'Desativado',
          required: true 
        },
        { 
          property: 'cnd_106', label: 'Optante Simples (106)', 
          type: 'boolean', 
          booleanTrue: 'Ativado',
          booleanFalse: 'Desativado',
          required: true 
        },
        { property: 'smart_cnd_dia', label: 'Dia CND', 
          type: 'number',
          placeholder: 'Dia Padrão da CND',
          help: 'Caso não informado, o sistema decidirá o melhor dia no mês para processamento',
          gridColumns: 3,
          maxValue: 28,
          errorMessage: 'Dia inválido',
          required: true 
        },

        { 
          property: 'smart_ecac', label: 'Relatório Fin. eCAC', 
          divider: 'Processamento RPA eCAC', 
          type: 'boolean', 
          booleanTrue: 'Ativado',
          booleanFalse: 'Desativado',
          required: true 
        },
        { 
          property: 'ecac_108', label: 'eCAC (108)', 
          type: 'boolean', 
          booleanTrue: 'Ativado',
          booleanFalse: 'Desativado',
          required: true 
        },
        { property: 'smart_ecac_dia', label: 'Dia eCAC', 
          type: 'number',
          placeholder: 'Dia Padrão do eCAC',
          help: 'Caso não informado, o sistema decidirá o melhor dia no mês para processamento',
          gridColumns: 3,
          maxValue: 28,
          errorMessage: 'Dia inválido',
          required: true 
        },

        { property: 'smart_giss', label: 'Fechamento de GISS', 
          divider: 'Processamento RPA GISS Fechamentos',
          help: 'Esse processo é executado mensalmente', 
          type: 'boolean',  
          booleanTrue: 'Ativado',
          booleanFalse: 'Desativado',
          required: true 
        },
        {
          property: 'usuario_giss',
          label: 'Usuário GISS',
          secret: true,
          placeholder: 'Usuário do GISS'
        },
        {
          property: 'senha_giss',
          label: 'Senha GISS',
          secret: true,
          placeholder: 'Senha do GISS'
        },
        { 
          property: 'dia_fechamento', label: 'Dia de fechamento do GISS', 
          type: 'number',
          placeholder: 'Dia de fechamento do GISS',
          help: 'Caso não informado, o sistema decidirá o melhor dia no mês para processamento',
          maxValue: 28,
          errorMessage: 'Dia inválido',
          required: true 
        },


      { property: 'smart_ginfes', label: 'Busca de GINFES', 
        divider: 'Processamento RPA GINFES Diário', 
        help: 'Esse processo é executado diáriamente',
        type: 'boolean', 
        booleanTrue: 'Ativado',
        booleanFalse: 'Desativado',
        required: true 
      },

      {
        property: 'usuario_ginfes',
        label: 'Usuário GINFES',
        secret: true,
        placeholder: 'Usuário do GINFES'
      },
      {
        property: 'senha_ginfes',
        label: 'Senha GINFES',
        secret: true,
        placeholder: 'Senha do GINFES'
      },

      ];

      public readonly breadcrumb: PoBreadcrumb = {
        items: [
          { label: 'Home', link: '/' },
          { label: 'Cadastro de Empresas', link: '/empresas' },
          { label: 'Editar' }
        ]
      };


      public readonly actions: PoPageDynamicEditActions = {
        save: '/empresas',
        saveNew: '/empresas',
      };
    
      public readonly literals: PoPageDynamicEditLiterals = {
        pageActionCancel: 'Descartar',
        pageActionSave: 'Gravar',
        pageActionSaveNew: 'Gravar e novo'
      };

      public readonly teste: PoPageDynamicEditBeforeSave = {
        newUrl: 'empresas'
      };

      public readonly teste2: PoPageDynamicEditBeforeSaveNew = {
        newUrl: 'empresas'
      };
}