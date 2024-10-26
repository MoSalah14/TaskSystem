import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/IProduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../Environment/Env';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  BaseUrl = environment.baseUrl
  constructor(private Http: HttpClient){ }

  AddToCard(ProductId:number,Quantity:number): Observable<any> {
    return this.Http.post<any>(`${this.BaseUrl}/Cart/add?productId=${ProductId}&quantity=${Quantity}`,{});
  }

  GetCartItems() : Observable<any> { 
    return this.Http.get<any>(`${this.BaseUrl}/Cart`);
  }


  DeleteItem(id:any) : Observable<any>{
    return this.Http.delete<any>(`${this.BaseUrl}/Cart/remove/${id}`);
  }

  // updateQuantity(productId: number, quantity: number) {
  //   const cartItem = this.cart.find(item => item.product.id === productId);
  //   if (cartItem) {
  //     cartItem.quantity = quantity;
  //   }
  // }







}
