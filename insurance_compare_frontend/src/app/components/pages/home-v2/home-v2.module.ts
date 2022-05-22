import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeV2RoutingModule } from './home-v2-routing.module';
import { HomeV2Component } from './home-v2.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FactComponent } from './fact/fact.component';
import { ProcessComponent } from './process/process.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { VideoComponent } from './video/video.component';
import { BlogpostComponent } from './blogpost/blogpost.component'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatDateFormats, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { MutualInsuranceComponent } from './mutual-insurance/mutual-insurance.component';
import { MutualListComponent } from './mutual-list/mutual-list.component';
import { MutualService } from './service-data/mutual.service';
import { LegalProtectionComponent } from './legal-protection/legal-protection.component';
import { LegalProtectionService } from './service-data/legal-protection.service';
import { LegalProtectionListComponent } from './legal-protection-list/legal-protection-list.component';
import { PrevoyanceComponent } from './prevoyance/prevoyance.component';
import { ProvoyanceService } from './service-data/provoyance.service';
import { PrevoyanceListComponent } from './prevoyance-list/prevoyance-list.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service-data/auth.service';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserService } from './service-data/user.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ContactComponent } from './contact/contact.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AnimalInsuranceComponent } from './animal-insurance/animal-insurance.component';
import { AnimalService } from './service-data/animal.service';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { Assurance1Component } from './assurance1/assurance1.component';
import { Assurance2Component } from './assurance2/assurance2.component';
import { MotoInsuranceComponent } from './moto-insurance/moto-insurance.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MotoService } from './service-data/moto.service';
import { PostalcodeService } from './service-data/postalcode.service';
import { MotoListComponent } from './moto-list/moto-list.component';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import { EmprunteurComponent } from './emprunteur/emprunteur.component';
import { EnprunteurService } from './service-data/enprunteur.service';
import { EmprunteurListComponent } from './emprunteur-list/emprunteur-list.component';
import { AutoInsuranceComponent } from './auto-insurance/auto-insurance.component';
import { RachatComponent } from './rachat/rachat.component';
import { AutoService } from './service-data/auto.service';
import { MatTabsModule } from '@angular/material/tabs';
import { GeneralConditionsComponent } from './general-conditions/general-conditions.component';
import { AuthGuard } from './auth.guard';
import { AuthGuard1 } from './auth1.guard';
import { AutoListComponent } from './auto-list/auto-list.component';
import { AssurancesService } from './service-data/assurances.service';
import { ContactService } from './service-data/contact.service';


export const MY_FORMAT: MatDateFormats = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@NgModule({
  declarations: [HomeV2Component, BannerComponent, AboutComponent, ServiceComponent, PortfolioComponent, FactComponent, ProcessComponent, TestimonialsComponent, VideoComponent, BlogpostComponent, MutualInsuranceComponent, MutualListComponent, LegalProtectionComponent, LegalProtectionListComponent, PrevoyanceComponent, PrevoyanceListComponent, LoginComponent, AdminPageComponent, ContactComponent, AnimalInsuranceComponent, AnimalListComponent, Assurance1Component, Assurance2Component, MotoInsuranceComponent, MotoListComponent, EmprunteurComponent, EmprunteurListComponent, AutoInsuranceComponent, RachatComponent, GeneralConditionsComponent, AutoListComponent],
  imports: [
    CommonModule,
    HomeV2RoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    AgGridModule.withComponents([]),
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    NgxMaterialTimepickerModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatTabsModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
  { provide: MAT_DATE_FORMATS, useValue: MY_FORMAT },
  {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

  MutualService,LegalProtectionService,ProvoyanceService,AuthGuard,AuthGuard1,ContactService,AssurancesService,AuthService, UserService, AnimalService,MotoService,PostalcodeService, EnprunteurService,AutoService
],

})
export class HomeV2Module { }
