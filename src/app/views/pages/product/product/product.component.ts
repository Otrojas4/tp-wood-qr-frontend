import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MadProduct } from 'src/_models/mad-product';
import { ProductMadService } from 'src/_services/product-mad.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  madProducts: Array<MadProduct> = [];

  constructor(private productMadService: ProductMadService, private router: Router) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.productMadService.getListProductsMad().subscribe(
      (res: Array<MadProduct>) => {
        this.madProducts = res;
      },
      (err) => {

      }
    );
  }

  viewProduct(item: MadProduct) {
    this.router.navigate([`/product/view/${item.id}`]);
  }
}
