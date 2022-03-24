import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DIRECTIVESComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { PypeandbootratpandservicesComponent } from './pypeandbootratpandservices/pypeandbootratpandservices.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegisterFormsComponent } from './register-forms/register-forms.component';

const routes: Routes = [
  {path:'',component:ReactiveFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
