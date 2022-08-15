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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ColorComponent,
    NaviComponent,
    BrandComponent,
    OneCarDetailComponent,
    CarImageComponent
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
