import { NgModule } from "@angular/core";
import { MenuModule } from "./menu/menu.module";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
    exports:[
        MenuComponent
    ],
    imports:[CommonModule,
             MenuModule]
})
export class CoreModule { }