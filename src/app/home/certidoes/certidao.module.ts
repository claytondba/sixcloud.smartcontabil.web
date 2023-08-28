import { NgModule } from "@angular/core";
import { CertidaoComponent } from "./certidao.component";
import { CommonModule } from "@angular/common";
import { PoModule } from "@po-ui/ng-components";
import { PoPageDynamicTableModule } from "@po-ui/ng-templates";

@NgModule({
    declarations: [CertidaoComponent],
    exports:[CertidaoComponent],
    imports:[
        CommonModule,
        PoModule,
        PoPageDynamicTableModule,
    ]
})
export class CertidaoModule {

}