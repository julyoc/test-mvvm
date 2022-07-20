import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteCrudComponent } from './paciente-crud/paciente-crud.component';

const routes: Routes = [
  {
    path: '',
    component: PacienteCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
