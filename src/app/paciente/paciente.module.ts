import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteRoutingModule } from './paciente-routing.module';
import { PacienteCrudComponent } from './paciente-crud/paciente-crud.component';
import { PacienteComponent } from './paciente.component';



@NgModule({
  declarations: [
    PacienteCrudComponent,
    PacienteComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule
  ],
  exports: [
    PacienteRoutingModule
  ]
})
export class PacienteModule { }
