import { Component, OnInit, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productnew',
  templateUrl: './productnew.component.html',
  styleUrls: ['./productnew.component.css']
})
export class ProductnewComponent implements OnInit {
  @Output() someEvent = new EventEmitter();
  myprod: Object = {title: "", price: 0, image: ""};
  need: any = 3;
  constructor(private _http: HttpService, private router: Router, private myview: ViewContainerRef) { }

  ngOnInit() {
  }
  onSubmit(){
    this._http.createProduct(this.myprod).subscribe(data => {
      this.someEvent.emit();
      this.router.navigate(['/products']);
      // if(data.errors){
      //   console.log(data.errors)
      //   this.need = "Something went wrong";
      // }
      // else{
      //   this.someEvent.emit();
      //   this.router.navigate(['/products']);
      //   // this._http.getProducts().subscribe(data => {
      //   //   this.myview['_data'].componentView.component.myview['_view'].nodes[0].componentView.component.myview._view.viewContainerParent.component.allproducts = data;
      //   //   this.router.navigate(['/products']);
      //   // })
      // }
    })
  }
}
