import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './index/main/main.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminUsuariosComponent } from './secundarias/admin-usuarios/admin-usuarios.component';

import { GestionProcesosComponent } from './secundarias/gestion-procesos/gestion-procesos.component';

import { SolicitudesVentaComponent } from './secundarias/solicitudes-venta/solicitudes-venta.component';

import { Routes, RouterModule } from '@angular/router';

import { PublicacionMascotasComponent } from './secundarias/publicacion-mascotas/publicacion-mascotas.component';

import { HistorialSolicitudesComponent } from './secundarias/historial-solicitudes/historial-solicitudes.component';

import { PanelControlComponent } from './secundarias/panel-control/panel-control.component';

import { ListaProductosComponent } from './secundarias/lista-productos/lista-productos.component';

import { ListaVentasComponent } from './secundarias/lista-ventas/lista-ventas.component';

import { ListaMascotasComponent } from './secundarias/lista-mascotas/lista-mascotas.component';

import { ReportesComponent } from './secundarias/reportes/reportes.component';

import { UsuariosFechaComponent } from './secundarias/usuarios-fecha/usuarios-fecha.component';

import { ProductosCategoriaComponent } from './secundarias/productos-categoria/productos-categoria.component';
import { VentasPordiaComponent } from './secundarias/ventas-pordia/ventas-pordia.component';



const rutas: Routes = [
 { path: '', component: MainComponent },
 { path: 'admin_usuarios', component: AdminUsuariosComponent },
 { path: 'gestion_procesos', component: GestionProcesosComponent },
 { path: 'solicitudes_venta', component: SolicitudesVentaComponent },
 { path: 'publicacion_mascotas', component: PublicacionMascotasComponent },
 { path: 'historial_solicitudes', component: HistorialSolicitudesComponent },
 { path: 'panel_control', component: PanelControlComponent },
 { path: 'lista_productos', component: ListaProductosComponent },
 { path: 'lista_ventas', component: ListaVentasComponent },
 { path: 'lista_mascotas', component: ListaVentasComponent },
 { path: 'reportes', component: ReportesComponent },
 { path: 'usuarios_fecha', component: UsuariosFechaComponent },
 { path: 'productos_categoria', component: ProductosCategoriaComponent },
 { path: 'ventas_pordia', component: VentasPordiaComponent }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(rutas) ],
  declarations: [ AppComponent, MainComponent, HeaderComponent, FooterComponent, AdminUsuariosComponent, GestionProcesosComponent, SolicitudesVentaComponent, PublicacionMascotasComponent, HistorialSolicitudesComponent, PanelControlComponent, ListaProductosComponent, ListaVentasComponent, ListaMascotasComponent, ReportesComponent, UsuariosFechaComponent, ProductosCategoriaComponent, VentasPordiaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
