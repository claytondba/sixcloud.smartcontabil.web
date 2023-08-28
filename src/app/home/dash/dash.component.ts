import { Component } from "@angular/core";
import { PoBreadcrumb } from "@po-ui/ng-components";

@Component({
    selector: 'sixcloud-dash',
    templateUrl: './dash.component.html',
    styleUrls: ['./dash.component.css']
})
export class DashComponent { 
    public readonly breadcrumb: PoBreadcrumb = {
        items: [
          { label: 'Home', link: '/' }
        ]
      };
}