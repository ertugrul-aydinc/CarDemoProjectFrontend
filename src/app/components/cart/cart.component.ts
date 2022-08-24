import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { CarDetail } from 'src/app/models/carDetail';
import { CartItem } from 'src/app/models/cartItem';
import { CartItems } from 'src/app/models/cartItems';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:CartItem[]=[];
  totalPrice:number=0;
  dateSelected:Date;
  dateSelected2:Date;

  constructor(private cartService:CartService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  
      this.getTotalPrice();
    
    
    
  }


  dateMinus(){
    var tarih1=new Date(this.dateSelected);
    var tarih2=new Date(this.dateSelected2);
    var zamanFark = Math.abs(tarih2.getTime() - tarih1.getTime());
    var gunFark = Math.ceil(zamanFark/(1000*3600*24));
    if(tarih2<tarih1){
      return 0;
    }
    return gunFark;
  }

  getCart(){
    this.cartItems = this.cartService.list()
  }
  


deleteFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.carDetail);
  this.toastrService.error("Deleted the Cart")
  
}


getCarImage(carDetail:CarDetail){
  if(carDetail.imagePath==null){
    return "DefaultImage.jpg"
  }else{
    return carDetail.imagePath
  }
}

getTotalPrice():number{
  if(this.totalPrice!==0){
    this.totalPrice = 0
  }
  for (let i = 0; i < this.cartItems.length; i++) {
    this.totalPrice=this.totalPrice + (this.cartItems[i].carDetail.dailyPrice)*this.cartItems[i].quantity;
  }

  return this.totalPrice;
}

}
