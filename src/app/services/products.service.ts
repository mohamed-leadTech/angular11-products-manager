import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/model/product.model";
import { environment } from "src/environments/environment";

@Injectable({providedIn:"root"})
export class ProductsService{

    base = environment.baseUrl;

    constructor(private http: HttpClient){}

    getAllProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(`${this.base}/products`)
    }
    
    getSelectedProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(`${this.base}/products?selected=true`)
    }

    getAvailableProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(`${this.base}/products?available=true`)
    }

    searchProducts(keyword: string): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.base}/products?name_like=${keyword}`)

    }
    
   select(product: Product) : Observable<Product>{
        product.selected = !product.selected;
        return this.http.put<Product>(`${this.base}/products/${product.id}`, product);
   }

   delete(product: Product): Observable<void>{
    return this.http.delete<void>(`${this.base}/products/${product.id}`);
   }

   save(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.base}/products`, product);
   }

   update(product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.base}/products/${product.id}`, product);
   }

   findProduct(productId: number): Observable<Product>{
    return this.http.get<Product>(`${this.base}/products/${productId}`);
   }

}