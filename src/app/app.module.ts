import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { OneCarDetailComponent } from './components/one-car-detail/one-car-detail.component';
import { CarImageComponent } from './components/car-image/car-image.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CarimageaddComponent } from './components/carimageadd/carimageadd.component';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ColorComponent,
    NaviComponent,
    BrandComponent,
    OneCarDetailComponent,
    CarImageComponent,
    VatAddedPipe,
    FilterPipePipe,
    FooterComponent,
    CartSummaryComponent,
    BrandAddComponent,
    CartComponent,
    CarimageaddComponent,
    ColorFilterPipePipe


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
