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
import { LoginGuard } from './core/auth/login.guard';
import { NotLoggedGuard } from './core/auth/not-logged.guard';
import { EmpresasComponent } from './home/empresas/empresas.component';
import { EmpresaEditComponent } from './home/empresas/empresa-edit/empresa-edit.component';
import { CertidaoComponent } from './home/certidoes/certidao.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'certidoes',
    component: CertidaoComponent,
    canActivate: [NotLoggedGuard]
  },
  {
    path: 'empresas',
    component: EmpresasComponent,
    canActivate: [NotLoggedGuard]
  },
  {
    path: 'empresa-edit/:id',
    component: EmpresaEditComponent,
    canActivate: [NotLoggedGuard]
  },
  {
    path: 'empresa-edit',
    component: EmpresaEditComponent,
    canActivate: [NotLoggedGuard]
  },
  {
    path: 'status',
    component: StatusRpaComponent,
    canActivate: [NotLoggedGuard]
  },
  {
    path: 'home',
    component: DashComponent,
    canActivate: [NotLoggedGuard]
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
