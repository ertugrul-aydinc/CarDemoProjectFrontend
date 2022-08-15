import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { OneCarDetailService } from 'src/app/services/one-car-detail.service';

@Component({
  selector: 'app-one-car-detail',
  templateUrl: './one-car-detail.component.html',
  styleUrls: ['./one-car-detail.component.css']
})
export class OneCarDetailComponent implements OnInit {

  carImages:CarImage[]=[]
  carDetails:CarDetail[]=[]

  


  constructor(private oneCarDetailService:OneCarDetailService, private activatedRoute:ActivatedRoute, private carDetailService:CarDetailService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarImagesByCarId(params["carId"])
        this.getCarDetailsByCarId(params["carId"])
      }else{
        this.getCarImagesByCarId(1)
      }
    })
    
  }
  

  getCarImagesByCarId(carId:number){
    this.oneCarDetailService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImages = response.data
    })
  }

  getCarImages(){
    this.oneCarDetailService.getCarImages().subscribe(response=>{
      this.carImages = response.data
    })
  }

  getCarDetailsByCarId(carId:number){
    this.carDetailService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.carDetails=response.data
    })
  }



}
