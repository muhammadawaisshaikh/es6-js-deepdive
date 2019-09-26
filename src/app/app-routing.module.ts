import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservablesComponent } from './components/observables/observables.component';


const routes: Routes = [
  { path: 'observables', component: ObservablesComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
