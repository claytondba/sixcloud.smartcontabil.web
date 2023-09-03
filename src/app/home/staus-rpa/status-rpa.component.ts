import { Component } from "@angular/core";
import { PoBreadcrumb } from "@po-ui/ng-components";

@Component({
    selector:'sixcloud-status-rpa',
    templateUrl: './status-rpa.component.html',
    styleUrls:['./status-rpa.component.css']
})
export class StatusRpaComponent{
    readonly serviceApi = 'https://rpa.devplus.com.br/Geral/statuspoui';

    readonly breadcrumb: PoBreadcrumb = {
      items: [{ label: 'Home', link: '/home' }, 
              { label: 'Status RPA' }]
    };

    readonly fields: Array<any> = [
      { property: 'id', key: true, visible: false },
      { property: 'instance_name', label: 'Bot Name' },
      { property: 'agora', label: 'Reference', sortable: false },
      { property: 'last_info', label: 'Ping' },
      { property: 'status', label: 'Status' }
    ];
  

}