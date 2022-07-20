import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfliccionRoutingModule } from './afliccion-routing.module';
import { AfliccionComponent } from './afliccion.component';
import { AfliccionCrudComponent } from './afliccion-crud/afliccion-crud.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AfliccionComponent,
    AfliccionCrudComponent
  ],
  imports: [
    CommonModule,
    AfliccionRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    AfliccionRoutingModule
  ]
})
export class AfliccionModule { }
