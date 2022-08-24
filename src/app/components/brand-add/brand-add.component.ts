import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brands:Brand[]=[];

  brandAddForm:FormGroup;

  brandDeleteForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private brandService:BrandService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createBrandAddForm();
    this.createBrandDeleteForm();
    this.getBrands();
  }

  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      brandName:["",Validators.required]
    })
  }

  createBrandDeleteForm(){
    this.brandDeleteForm = this.formBuilder.group({
      brandId:["",Validators.required]
    })
  }

  add(){
    if(this.brandAddForm.valid){
      let brandModel = Object.assign({},this.brandAddForm.value);
      this.brandService.add(brandModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success("Brand Added","Successful")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            console.log(responseError.error.Errors[i].ErrorMessage,"Validation Error")
            
          }
        }
      })
    }else{
      this.toastrService.error("Error")
    }
  }

  delete(){
    if(this.brandDeleteForm.valid){
      let brandModel = Object.assign({},this.brandDeleteForm.value);
      this.brandService.delete(brandModel).subscribe(response=>{
        this.toastrService.success("Brand Deleted","Successful")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage)
          }
        }
      })
    }else{
      this.toastrService.error("Error");
    }
  }

  getBrands(){
  this.brandService.getBrands().subscribe(response=>{
    this.brands = response.data;
  })
  }
}
