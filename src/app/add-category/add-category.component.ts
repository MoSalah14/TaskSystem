import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  CategoryForm: FormGroup;
 IsFound!:string;
 categoryId:any=0
  constructor(private fb: FormBuilder,private router: ActivatedRoute
    ,private route:Router) 
  {
    this.CategoryForm = this.fb.group({
      name: ['', [Validators.required]],
     } )}

     get Name() {
      return this.CategoryForm.get('name');
    }
    

    // onSubmit() {
    //   if (this.CategoryForm.valid) {
    //     const formData:ICategory = {
    //       id:this.categoryId,
    //       name: this.CategoryForm.value.name, 
    //     };
    //       this.categoryServ.AddCategory(formData).subscribe({
    //         next: (data) => {
    //           if (data.error === "This Category Is Found") {
    //             this.IsFound = data.error;
    //             console.log('Category already exists:', data.error);
    //           } else {
    //             alert(data.response);
    //             console.log('Category added successfully:', data.response);
    //             this.route.navigate(['/Categories']);
    //           }
    //         },
    //         error: (err) => {
    //           console.error('Error during category creation:', err);
    //         }
    //       });
    //     }
    //   }
    }
  