import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReclamiComponent } from './pages/reclami/reclami.component';
import { ReclamoComponent } from './pages/reclamo/reclamo.component';
import { FiltroComponent } from './pages/reclami/filtro/filtro.component';
import { ElencoComponent } from './pages/reclami/elenco/elenco.component';
import { DatiClienteComponent } from './pages/reclamo/dati-cliente/dati-cliente.component';
import { DatiReclamoComponent } from './pages/reclamo/dati-reclamo/dati-reclamo.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReclamiComponent,
    ReclamoComponent,
    FiltroComponent,
    ElencoComponent,
    DatiClienteComponent,
    DatiReclamoComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
