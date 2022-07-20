import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path:'',
    component: IndexComponent
  },
  {
    path: 'Paciente',
    loadChildren: () => import('./paciente/paciente-routing.module').then(m => m.PacienteRoutingModule)
  },
  {
    path: 'Afliccion',
    loadChildren: () => import('./afliccion/afliccion-routing.module').then(m => m.AfliccionRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
