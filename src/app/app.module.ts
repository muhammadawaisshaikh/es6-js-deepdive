import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './components/observables/observables.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    DependencyInjectionComponent
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
