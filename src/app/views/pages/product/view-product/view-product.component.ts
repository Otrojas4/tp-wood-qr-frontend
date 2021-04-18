import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MadProduct } from 'src/_models/mad-product';
import { ProductMadService } from 'src/_services/product-mad.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  loading: boolean = false;
  id: number;
  madProductFinded: MadProduct = {} as MadProduct;

  constructor(private activatedRoute: ActivatedRoute, private productMadService: ProductMadService) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.getOneMadProduct();
  }

  getOneMadProduct() {
    this.productMadService.getOneProductMad(this.id).subscribe(
      (res: MadProduct) => {
        this.madProductFinded = res;
        console.log(this.madProductFinded);
        this.loading = !this.loading;
      },
      (err) => {

      }
    );
  }

}
