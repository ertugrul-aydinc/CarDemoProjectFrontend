import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OneCarDetailComponent } from './components/one-car-detail/one-car-detail.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomepageComponent},
  {path:"cars/color/:colorId",component:HomepageComponent},
  {path:"cars/brand/:brandId",component:HomepageComponent},
  {path:"carimages/getbycarid/:carId",component:OneCarDetailComponent},
  {path:"cars/brand/:brandId/color/:colorId",component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
