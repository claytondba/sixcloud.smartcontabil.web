import { NgModule } from "@angular/core";
import { StatusRpaComponent } from "./status-rpa.component";
import { CommonModule } from "@angular/common";
import { PoModule } from "@po-ui/ng-components";
import { PoPageDynamicTableModule } from "@po-ui/ng-templates";

@NgModule({
    declarations: [StatusRpaComponent],
    exports:[StatusRpaComponent],
    imports:[
        CommonModule,
        PoModule, 
        PoPageDynamicTableModule
    ]
})export class StatusRpaModule { }