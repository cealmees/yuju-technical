import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { IProduct } from '@core/interfaces';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class YujuProductsService {

  private httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      CacheControl: 'no-cache',
    })
  };

  constructor(private http: HttpClient) { }

  public getProducts(productId: string): Observable<IProduct[]> {
    if (!productId) {
      return throwError('No product id was provided');
    }

    const path = `${environment.YUJU_API}/shops/${productId}/products/`;

    return this.http.get<IProduct[]>(path, this.httpOptions);
  }
}
