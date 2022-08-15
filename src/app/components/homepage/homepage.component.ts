import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  carDetails:CarDetail[]=[]

  constructor(private carDetailService:CarDetailService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getCarsDetailsFilterColor()
      }else if(params["brandId"]){
        this.getCarsDetailsFilterBrand()
      }else{
        this.getCarsDetails()
      }
    })
  }

  getCarsDetailsFilterColor(){
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
         this.getCarsByColor(params["colorId"])
      }else if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else if(params["colorId"]&&params["brandId"]){
        this.getCarsByColorAndBrand(params["colorId"],params["brandId"])
      }else{
        this.getCarsDetails()
      }
    })
  }

  getCarsDetailsFilterBrand(){
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
         this.getCarsByBrand(params["brandId"])
      }else{
        this.getCarsDetails()
      }
    })
  }

  getCarsDetails(){
    this.carDetailService.getCarsDetails().subscribe(response=>{
      this.carDetails=response.data
    })
  }

  getCarImage(carDetail:CarDetail){
    if(carDetail.imagePath==null){
      return "DefaultImage.jpg"
    }else{
      return carDetail.imagePath
    }
  }

  getCarsByColor(colorId:number){
    this.carDetailService.getCarsByColor(colorId).subscribe(response=>{
      this.carDetails = response.data
    })
  }

  getCarsByBrand(brandId:number){
    this.carDetailService.getCarsByBrand(brandId).subscribe(response=>{
      this.carDetails=response.data
    })
  }

  getCarsDetailsByCarId(carId:number){
    this.carDetailService.getCarsByColor(carId).subscribe(response=>{
      this.carDetails=response.data
    })
  }

  getCarsByColorAndBrand(colorId:number,brandId:number){
    this.getCarsByColor(colorId);
    this.carDetails = this.carDetails.filter(b=>b.brandId==brandId);
  }

}
