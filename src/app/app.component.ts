import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProductsComponent} from "./products/products.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-app';
  @ViewChild(ProductsComponent) productsComponent: ProductsComponent | undefined;

  ngOnInit() {
    console.log("this.productsComponent ngOnInit", this.productsComponent);
  }

  ngAfterViewInit() {
    console.log("this.productsComponent ngAfterViewInit", this.productsComponent);
  }

  deleteProduct() {
    this.productsComponent?.products.pop();
  }
}
