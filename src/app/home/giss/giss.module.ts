import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PoPageDynamicTableModule } from "@po-ui/ng-templates";
import { PoModule } from "@po-ui/ng-components";
import { GissComponent } from "./giss.component";

@NgModule({
    declarations: [GissComponent],
    exports:[GissComponent],
    imports:[
        CommonModule,
        PoModule,
        PoPageDynamicTableModule,
    ]
})
export class GissModule {

}