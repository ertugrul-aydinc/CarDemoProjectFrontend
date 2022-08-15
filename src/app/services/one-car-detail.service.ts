import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class OneCarDetailService {

  apiUrl="https://localhost:7252/api/"

  constructor(private httpClient:HttpClient) { }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath =this.apiUrl+ "carimages/getbycarid/"+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl+"carimages/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
