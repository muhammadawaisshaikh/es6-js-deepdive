import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';
import { ClosureComponent } from './components/closure/closure.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    DependencyInjectionComponent,
    ClosureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
