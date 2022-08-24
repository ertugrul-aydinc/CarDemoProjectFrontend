import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:7252/api/"

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath =this.apiUrl+ "brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  add(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl+"brands/add"
    return this.httpClient.post<ResponseModel>(newPath,brand)
  }

  delete(brand:Brand):Observable<ResponseModel>{
    let newPath = this.apiUrl + "brands/delete"
    return this.httpClient.post<ResponseModel>(newPath,brand)
  }
}
