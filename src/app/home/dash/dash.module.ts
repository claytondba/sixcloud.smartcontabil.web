import { NgModule } from "@angular/core";
import { DashComponent } from "./dash.component";
import { CommonModule } from "@angular/common";
import { PoModule } from "@po-ui/ng-components";

@NgModule({
    declarations: [DashComponent],
    exports:[DashComponent],
    imports:[
        CommonModule,
        PoModule
    ]
})
export class DashModule { }