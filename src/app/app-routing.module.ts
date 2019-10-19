import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservablesComponent } from './components/observables/observables.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';


const routes: Routes = [
  { path: 'observables', component: ObservablesComponent },
  { path: 'dependency-injection', component: DependencyInjectionComponent },
  { path: '', redirectTo: '/observables', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
