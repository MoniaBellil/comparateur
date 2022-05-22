import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HeaderOneComponent } from './header-one/header-one.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { HeaderThreeComponent } from './header-three/header-three.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CanvasComponent } from './canvas/canvas.component';
import { FooterComponent } from './footer/footer.component';
import { BrandsComponent } from './brands/brands.component';
import { CtaComponent } from './cta/cta.component';
import { ServicesidebarComponent } from './servicesidebar/servicesidebar.component';
import { BlogsidebarComponent } from './blogsidebar/blogsidebar.component';
import { RelatedpostComponent } from './relatedpost/relatedpost.component';
import { ShopsidebarComponent } from './shopsidebar/shopsidebar.component';
import { RelatedshopComponent } from './relatedshop/relatedshop.component';
import { FixedHeaderComponent } from './fixed-header/fixed-header.component';



@NgModule({
  declarations: [HeaderOneComponent, HeaderTwoComponent, HeaderThreeComponent, BreadcrumbComponent, CanvasComponent, FooterComponent, BrandsComponent, CtaComponent, ServicesidebarComponent, BlogsidebarComponent, RelatedpostComponent, ShopsidebarComponent, RelatedshopComponent, FixedHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BreadcrumbModule,
    SlickCarouselModule,
    

    
  ],
  exports: [HeaderOneComponent, HeaderTwoComponent, HeaderThreeComponent, BreadcrumbComponent, FooterComponent, BrandsComponent, CtaComponent, ServicesidebarComponent, BlogsidebarComponent, RelatedpostComponent, ShopsidebarComponent, RelatedshopComponent, FixedHeaderComponent]
})
export class SharedModule { }
