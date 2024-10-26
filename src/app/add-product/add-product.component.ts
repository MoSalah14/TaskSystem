import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../Services/product.service';
import { IProduct } from '../Interfaces/IProduct';
import { ImagesService } from '../Services/images.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  productForm: FormGroup;
  selectedFile!: File;
  ProductId:any=0
  isUpdate = false;
  product!:IProduct;
  photo:string="";
AllCategories:any;


  constructor(private fb: FormBuilder,private route:Router,
    private productServ: ProductService,private imgserv:ImagesService,private router:ActivatedRoute) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      image: [''],
    });

  }
  ngOnInit(): void {
    this.AllCategory()
  }

  AllCategory() {
    this.productServ.GetAllCategory().subscribe({
      next: (response) => {
        console.log(response);
        if (!response.isError) {
          this.AllCategories = response.data
        }
      }
    })
  }


 
  get Name() {
    return this.productForm.get('name');
  }
  
  get Price() {
    return this.productForm.get('price');
  }
  get Image() {
    return this.productForm.get('image')?.value as File
  }
  get CategoryName() {
    return this.productForm.get('categoryId');
  }

  
  onSubmit(productForm: FormGroup) {
    if (productForm.valid) {

      const productData: IProduct = {
        id:this.ProductId,
        Name: productForm.value.name,
        categoryId: parseInt(productForm.value.categoryId), 
        ImageUrl:this.photo,
        Price: parseFloat(productForm.value.price) // Parse to ensure it's a number.
      };
      console.log(productData);
      this.productServ.AddProduct(productData).subscribe({
        next: data => {
          console.log('Response:', data);
          this.route.navigate(['/allProducts']);

        },
        error: err =>
        { 
          console.error('Error during subscription:', err)
       } });
    
    }
  }

}