import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/IProduct';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../Environment/Env';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

BaseUrl = environment.baseUrl

  constructor(private Http: HttpClient){ }


   GetAll(pageIndex:number,pageSize:number,CategoryId?: number): Observable<any> {
    let url = `${this.BaseUrl}/Products?pageIndex=${pageIndex}&pageSize=${pageSize}`;

    // Append categoryId to the URL only if it's provided
    if (CategoryId !== undefined && CategoryId !== null) {
        url += `&categoryId=${CategoryId}`;
    }

    return this.Http.get<any>(url);
  }


  
  AddProduct(prod: IProduct): Observable<any> {
    return this.Http.post(`${this.BaseUrl}/Products`, prod)
  }

  GetAllCategory(): Observable<any> {
    return this.Http.get(`${this.BaseUrl}/Category`)
  }

// UploadImage (image:FormData):Observable<any>
// {
//  return this.Http.post('http://localhost:5129/api/Product/UploadImag',image)
//    .pipe(
//      catchError((error) => {
//        console.error('Error:', error);
//        return throwError(() => error.message || 'Server error');
//      }),
     
//    );
// }



UpdateProduct(id:number,pro:IProduct): Observable<{ response: any, error: any }> {

  return this.Http.put(`http://localhost:5129/api/Product?Id=${id}`, pro)
    .pipe(
      map((response: any) => ({ response, error: null })),
      catchError((error) => {
        console.error('Error:', error);
        return [{ response: null, error: error.message || 'Server error' }];
      })
    );
}


Delete(id:number)
: Observable<IProduct> {

 return this.Http.delete<IProduct>(`http://localhost:5129/api/Product/Delete_Element?Id=${id}`)
 .pipe(catchError((err) => {
   return throwError(() => err.message || "server error");
 }));
}

}
