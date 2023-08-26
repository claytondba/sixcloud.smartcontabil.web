import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu.component";
import { PoModule } from "@po-ui/ng-components";

@NgModule({

    declarations: [MenuComponent],
    exports:[MenuComponent],
    imports:[PoModule]


})
export class MenuModule { }