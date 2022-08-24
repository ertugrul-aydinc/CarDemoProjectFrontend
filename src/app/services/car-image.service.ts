import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="https://localhost:7252/api/"

  constructor(private httpClient:HttpClient) { }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath =this.apiUrl+ "carimages/getbycarid/"+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  add(carImage:CarImage){
    let newPath = this.apiUrl+"carimages/add"
    return this.httpClient.post(newPath,carImage);
  }
}
