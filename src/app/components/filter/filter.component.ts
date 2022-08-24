import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { FilterOptions } from 'src/app/models/filterOptions';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  brands:Brand[]=[];

  colors:Color[]=[];

  selectedBrand:string="Select Brand";

  selectedColor:string="Select Color";

  constructor(private carDetailService:CarDetailService,
              private brandService:BrandService,
              private colorService:ColorService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }


  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
    })
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data;
    })
  }

  write(){
    console.log(this.selectedBrand);
    console.log(this.selectedColor);
  }

  getByFilterUrl():string{
    if(this.selectedColor!="Select Color" && this.selectedBrand!="Select Brand"){
      return "/cars/color/"+this.selectedColor+"/brand/"+this.selectedBrand;
    }
    else if(this.selectedBrand!="Select Brnad"&&this.selectedColor=="Select Color"){
      return "/cars/brand/"+this.selectedBrand;
    }
    else if(this.selectedBrand=="Select Brand"&&this.selectedColor!="Select Color"){
      return "/cars/color/"+this.selectedColor;
    }

    return null;
  }

}
