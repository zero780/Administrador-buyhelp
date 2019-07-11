import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './index/main/main.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminUsuariosComponent } from './secundarias/admin-usuarios/admin-usuarios.component';

import { GestionProcesosComponent } from './secundarias/gestion-procesos/gestion-procesos.component';
import { Routes, RouterModule } from '@angular/router';

const rutas: Routes = [
 { path: '', component: MainComponent },
 { path: 'admin_usuarios', component: AdminUsuariosComponent },
 { path: 'gestion_procesos', component: GestionProcesosComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(rutas) ],
  declarations: [ AppComponent, MainComponent, HeaderComponent, FooterComponent, AdminUsuariosComponent, GestionProcesosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
