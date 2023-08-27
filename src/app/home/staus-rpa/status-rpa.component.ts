import { Component } from "@angular/core";

@Component({
    selector:'sixcloud-status-rpa',
    templateUrl: './status-rpa.component.html',
    styleUrls:['./status-rpa.component.css']
})
export class StatusRpaComponent{
    readonly serviceApi = 'https://localhost:7109/Geral/statuspoui';

    readonly fields: Array<any> = [
      { property: 'id', key: true, visible: false },
      { property: 'instance_name', label: 'Bot Name' },
      { property: 'agora', label: 'Reference', sortable: false },
      { property: 'last_info', label: 'Ping' },
      { property: 'status', label: 'Status' }
    ];
  

}