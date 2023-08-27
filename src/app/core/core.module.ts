import { NgModule } from "@angular/core";
import { MenuModule } from "./menu/menu.module";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RequestInterceptor } from "./auth/request.interceptor";

@NgModule({
    exports:[
        MenuComponent
    ],
    imports:[CommonModule,
             MenuModule],
             providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class CoreModule { }