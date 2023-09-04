import { Component } from "@angular/core";
import { PoBreadcrumb, PoGaugeRanges } from "@po-ui/ng-components";

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

      salesRanges: Array<PoGaugeRanges> = [
        { from: 0, to: 50, label: 'Bad', color: '#c64840' },
        { from: 50, to: 75, label: 'Average', color: '#ea9b3e' },
        { from: 75, to: 100, label: 'OK', color: '#00b28e' }
      ];
    
      turnoverRanges: Array<PoGaugeRanges> = [
        { from: 0, to: 50, label: 'Low rate', color: '#00b28e' },
        { from: 50, to: 75, label: 'Average rate', color: '#ea9b3e' },
        { from: 75, to: 100, label: 'High rate', color: '#c64840' }
      ];
}