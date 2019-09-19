import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getProducts(){
    return this._http.get('/getproducts');
  }
  getOneProduct(id: string){
    return this._http.get(`/getproducts/${id}`);
  }
  createProduct(productobj){
    return this._http.post('/postproducts', productobj);
  }
  editProduct(id: string, productobj){
    return this._http.put(`/putproducts/${id}`, productobj);
  }
  deleteProduct(id: string){
    return this._http.delete(`/deleteproducts/${id}`);
  }
}
