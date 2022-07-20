import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PacienteModule } from './paciente/paciente.module';
import { AfliccionModule } from './afliccion/afliccion.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PacienteModule,
    AfliccionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
