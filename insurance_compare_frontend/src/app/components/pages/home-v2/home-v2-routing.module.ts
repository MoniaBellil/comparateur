import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AnimalInsuranceComponent } from './animal-insurance/animal-insurance.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { Assurance1Component } from './assurance1/assurance1.component';
import { Assurance2Component } from './assurance2/assurance2.component';
import { AuthGuard } from './auth.guard';
import { AuthGuard1 } from './auth1.guard';
import { AutoInsuranceComponent } from './auto-insurance/auto-insurance.component';
import { AutoListComponent } from './auto-list/auto-list.component';
import { ContactComponent } from './contact/contact.component';
import { EmprunteurListComponent } from './emprunteur-list/emprunteur-list.component';
import { EmprunteurComponent } from './emprunteur/emprunteur.component';
import { GeneralConditionsComponent } from './general-conditions/general-conditions.component';
import { HomeV2Component } from './home-v2.component';
import { LegalProtectionListComponent } from './legal-protection-list/legal-protection-list.component';
import { LegalProtectionComponent } from './legal-protection/legal-protection.component';
import { LoginComponent } from './login/login.component';
import { MotoInsuranceComponent } from './moto-insurance/moto-insurance.component';
import { MotoListComponent } from './moto-list/moto-list.component';
import { MutualInsuranceComponent } from './mutual-insurance/mutual-insurance.component';
import { MutualListComponent } from './mutual-list/mutual-list.component';
import { PrevoyanceListComponent } from './prevoyance-list/prevoyance-list.component';
import { PrevoyanceComponent } from './prevoyance/prevoyance.component';
import { RachatComponent } from './rachat/rachat.component';

const routes: Routes = [
{ path: '', component: HomeV2Component },
{
  path: 'mutual-insurance',
  component: MutualInsuranceComponent,
  data: { title: 'mutual-insurance' },
},
{
  path: 'mutual-list',
  component: MutualListComponent,
  data: { title: 'mutual-list' },
},

{
  path: 'legal-protection-insurance',
  component: LegalProtectionComponent,
  data: { title: 'legal-protection-insurance'},
},
{
  path: 'legal-protection-list',
  component: LegalProtectionListComponent,
  data: { title: 'legal-protection-list'},
},
{
  path: 'provident-insurance',
  component: PrevoyanceComponent,
  data: { title: 'provident-insurance'},
},
{
  path: 'animal-insurance',
  component: AnimalInsuranceComponent,
  data: { title: 'animal-insurance'},
},
{
  path: 'animal-insurance-list',
  component: AnimalListComponent,
  data: { title: 'animal-insurance-list'},
},
{
  path: 'provident-list',
  component: PrevoyanceListComponent,
  data: { title: 'provident-list'},
},
{
  path: 'login',
  component: LoginComponent,canActivate: [AuthGuard]
},
{
  path: 'admin-page',
  component: AdminPageComponent,canActivate: [AuthGuard1],
  data: { title: 'admin-page'},
},
{
path: 'energie',
component: Assurance1Component,
data: { title: 'energie'},
},
{
  path: 'défiscalisation',
  component: Assurance2Component,
  data: { title: 'défiscalisation'},
},
{
  path: 'contact',
  component: ContactComponent,
  data: { title: 'contact'},
},
{
  path: 'moto',
  component: MotoInsuranceComponent,
  data: { title: 'moto'},
},
{
  path: 'moto-list',
  component: MotoListComponent,
  data: { title: 'moto-list'},
},
{
  path: 'emprunteur',
  component: EmprunteurComponent,
  data: { title: 'emprunteur'},
},
{
  path: 'emprunteur-list',
  component: EmprunteurListComponent,
  data: { title: 'emprunteur-list'},
},
{
  path: 'auto-insurance',
  component: AutoInsuranceComponent,
  data: { title: 'auto-insurance'},
},
{
  path: 'rachat',
  component: RachatComponent,
  data: { title: 'rachat'},
},
{
  path: 'general-conditions',
  component: GeneralConditionsComponent,
  data: { title: 'general-conditions'},
},
{
  path: 'auto-list',
  component: AutoListComponent,
  data: { title: 'auto-list'},
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeV2RoutingModule { }
