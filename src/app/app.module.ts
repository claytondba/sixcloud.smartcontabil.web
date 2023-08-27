import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { MenuComponent } from './core/menu/menu.component';
import { HomeModule } from './home/home.module';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { LoginComponent } from './home/login/login.component';
import { StatusRpaComponent } from './home/staus-rpa/status-rpa.component';
import { DashComponent } from './home/dash/dash.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'status',
    component: StatusRpaComponent
  },
  {
    path: 'home',
    component: DashComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    
    RouterModule.forRoot(routes, {useHash:true}),
         PoTemplatesModule
  ],
  exports:[
    RouterModule,
    MenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
