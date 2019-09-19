import { Component, OnInit, ViewContainerRef, Output, EventEmitter} from '@angular/core';
import { HttpService } from '../../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {
  @Output() someEvent = new EventEmitter();
  myprod: any = {_id: 'hi', title: "", price: 0, image: ""};
  need: any = 3;
  constructor(private _http: HttpService, private router: Router, private route: ActivatedRoute, private myview: ViewContainerRef) { }

  ngOnInit() {
    this._http.getOneProduct(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.myprod = data;
    })
    //this.myview['_data'].componentView.component.myview['_view'].nodes[0].componentView.component.myview._view.viewContainerParent.component.allproducts
  }
  onSubmit(){
    this._http.editProduct(this.myprod._id, this.myprod).subscribe(data => {
      this.someEvent.emit();
      this.router.navigate(['/products']);
      // if(data.errors){
      //   this.need = "Something went wrong"
      // }
      // else{
        // this.someEvent.emit();
        // this.router.navigate(['/products']);
      //   // this._http.getProducts().subscribe(data => {
      //   //   this.myview['_data'].componentView.component.myview['_view'].nodes[0].componentView.component.myview._view.viewContainerParent.component.allproducts = data;
      //   //   this.router.navigate(['/products']);
      //   // })
      // }
    })
  }

}
