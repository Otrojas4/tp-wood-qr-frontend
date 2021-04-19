import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MadProduct } from 'src/_models/mad-product';
import { AuthService } from 'src/_services/auth.service';
import { ProductMadService } from 'src/_services/product-mad.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  loading: boolean = false;
  id: number;
  madProductFinded: MadProduct = {primaryTrans: {}, secondaryTrans: {}} as MadProduct;

  showPrimary: boolean = false;

  showSecondary: boolean = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private productMadService: ProductMadService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.getOneMadProduct();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  getOneMadProduct() {
    this.productMadService.getOneProductMad(this.id).subscribe(
      (res: MadProduct) => {
        this.madProductFinded = res;

        this.loading = !this.loading;
      },
      (err) => {

      }
    );
  }

  toglePrimary() {
    this.showPrimary = !this.showPrimary;
  }

  togleSecondary() {
    this.showSecondary = !this.showSecondary;
  }

}
