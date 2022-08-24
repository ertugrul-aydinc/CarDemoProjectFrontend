import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-carimageadd',
  templateUrl: './carimageadd.component.html',
  styleUrls: ['./carimageadd.component.css']
})
export class CarimageaddComponent implements OnInit {

  carImageAddForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private carImageServie:CarImageService, private toastrService:ToastrService) { }

  ngOnInit(): void {
  }

  createCarImageAddForm(){
    this.carImageAddForm = this.formBuilder.group({
      carId:["",Validators.required],
      imageFile:["",Validators.required]
    })
  }

  add(){
    let carImageModel = Object.assign("",this.carImageAddForm.value)
    this.carImageServie.add(carImageModel).subscribe(response=>{
      console.log(response)
      this.toastrService.success("Image Added","Successful");
    })
    
  }

}
