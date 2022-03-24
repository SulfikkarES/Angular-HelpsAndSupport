import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DIRECTIVESComponent } from './directives/directives.component';
import { PypeandbootratpandservicesComponent } from './pypeandbootratpandservices/pypeandbootratpandservices.component';
import { PipeNamePipe } from './pipe-name.pipe';
import { RegisterFormsComponent } from './register-forms/register-forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DIRECTIVESComponent,
    PypeandbootratpandservicesComponent,
    PipeNamePipe,
    RegisterFormsComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
