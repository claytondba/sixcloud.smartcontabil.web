import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PoPageBlockedUserModule, PoPageDynamicTableModule } from "@po-ui/ng-templates";
import { PoModule } from "@po-ui/ng-components";
import { GinfesComponent } from "./ginfes.component";

@NgModule({
    declarations: [GinfesComponent],
    exports:[GinfesComponent],
    imports:[
        CommonModule,
        PoModule,
        PoPageDynamicTableModule,
        PoPageBlockedUserModule
    ]
})
export class GinfesModule {

}