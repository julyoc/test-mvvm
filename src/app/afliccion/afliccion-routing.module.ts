import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfliccionCrudComponent } from './afliccion-crud/afliccion-crud.component';

const routes: Routes = [
  {
    path: '',
    component: AfliccionCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfliccionRoutingModule { }
