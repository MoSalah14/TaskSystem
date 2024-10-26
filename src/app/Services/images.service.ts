import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  imageData!: string;

  constructor(private Http: HttpClient)
   { }
  UploadImage (image:FormData):Observable<any>
{

 return this.Http.post('http://localhost:5129/api/UploadImage/UploadImag',image)
   .pipe(
     catchError((error) => {
       console.error('Error:', error);
       return throwError(() => error.message || 'Server error');
     }),
     
   );
}
onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageData = e.target.result;
      localStorage.setItem('imageDataAdmin', this.imageData);
    };
    reader.readAsDataURL(file);
  }
}
}
