import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allproducts: any = [];
  constructor(private _http: HttpService, public route: ActivatedRoute) { 
  }

  ngOnInit() {
    this._http.getProducts().subscribe(data => {
      this.allproducts = data;
    })
  }
  onDelete(product){
    this._http.deleteProduct(product._id).subscribe(data => {
      console.log('deleted', data)
      this.ngOnInit();
    })
  }

}
