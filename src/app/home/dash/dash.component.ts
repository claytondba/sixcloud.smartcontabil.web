import { Component } from "@angular/core";
import { PoBreadcrumb, PoGaugeRanges } from "@po-ui/ng-components";
import { ServiceStatus } from "./models/service-status";
import { DashService } from "./dash.service";

@Component({
    selector: 'sixcloud-dash',
    templateUrl: './dash.component.html',
    styleUrls: ['./dash.component.css']
})
export class DashComponent { 

  cndStatus: ServiceStatus[] = [];
  ginfesStatus: ServiceStatus[] = [];
  gissStatus: ServiceStatus[] = [];
  currentDate = new Date();
  isLoadingCnd: boolean = true;
  isLoadingGinfes: boolean = true;
  isLoadingGiss: boolean = true;

  constructor(private dashboardService: DashService){
    this.dashboardService.statusCnd().subscribe( ss => {
      
      this.cndStatus = ss;
      this.isLoadingCnd = false;
    });

    this.dashboardService.statusGinfes().subscribe( ss => {
      this.ginfesStatus = ss;
      this.isLoadingGinfes = false;
    });

    this.dashboardService.statusGiss().subscribe( ss => {
      this.gissStatus = ss;
      this.isLoadingGiss = false;
    });
  }
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