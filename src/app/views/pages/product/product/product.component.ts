import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import showToast from 'src/app/utils/toast';
import { MadProduct } from 'src/_models/mad-product';
import { AuthService } from 'src/_services/auth.service';
import { ProductMadService } from 'src/_services/product-mad.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  madProducts: Array<MadProduct> = [];

  constructor(private productMadService: ProductMadService, private router: Router, private authService: AuthService) { }

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

  getImageById(id: number) {
    return `https://tp-wood-images-node.azurewebsites.net/api-images-qr/${id}`;
  }

  viewProduct(item: MadProduct) {
    this.router.navigate([`/product/view/${item.id}`]);
  }

  editProduct(item: MadProduct) {
    this.router.navigate([`/product/edit/${item.id}`]);
  }

  deleteProduct(item: MadProduct) {
    this.productMadService.deleteProductMad(item.id).subscribe(
      (res) => {
        this.madProducts = this.madProducts.filter(x => x.id !== item.id);
        showToast('success', 'Se eliminĂ³ con exito');
        this.router.navigate(['/product']);
      },
      (err) => {
        showToast('error', 'Error de servidor');
      }
    );
  }

  isAdmin() {
    return this.authService.isAdmin();
  }
}
