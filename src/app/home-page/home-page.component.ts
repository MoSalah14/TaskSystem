import { Component } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { IProduct } from '../Interfaces/IProduct';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  products: IProduct[] = [];
  pageIndex: number = 1;
  pageSize: number = 10;
  CategoryId?: number;
  constructor(private productServ: ProductService, private cartService:CartService) { }
  ngOnInit(): void {

    this.productServ.GetAll(this.pageIndex, this.pageSize, this.CategoryId).subscribe({
      next: Response => {
        this.products = Response.data;
      },
      error: err => console.error('Error during subscription:', err)
    })
    
  }
 AddToCart(productId:number,quantity = 1) {
  this.cartService.AddToCard(productId,quantity).subscribe({
    next: Response => {
      console.log(Response);
      
      this.products = Response.data;
    },
    error: err => console.error('Error during subscription:', err)
  })
}



}
