import { Component } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.scss']
})
export class CartComponent {
  CartItems: any;
constructor(private _CartService:CartService){}

ngOnInit(): void {
  this.GetAllCartItems()
}
GetAllCartItems() {
  this._CartService.GetCartItems().subscribe({
    next: (data) => {
      this.CartItems = data;
      console.log(this.CartItems);
    },
    error: (err) => {
      console.error('Error during subscription:', err);
    }
  });
}


DeleteCat(id: any) {
  this._CartService.DeleteItem(id).subscribe({
    next: () => {
      this.GetAllCartItems()
    },

    error: err => console.error('Error during subscription:', err)
  });
}

}
