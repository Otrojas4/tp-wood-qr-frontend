import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import showToast from 'src/app/utils/toast';
import { MadProduct } from 'src/_models/mad-product';
import { PrimaryTransService } from 'src/_services/primary-trans.service';
import { ProductMadService } from 'src/_services/product-mad.service';
import { SecondaryTransService } from 'src/_services/secondary-trans.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  imgString: string;

  loading = true;

  woodTypes = ['Nogal', 'Olmo', 'Caoba', 'Cerezo', 'Roble', 'Olivo', 'Abeto', 'Pino', 'Cedro'];

  editProductForm: FormGroup;

  productToEdit: MadProduct;

  maxDate = new Date();

  id: number;

  primaryTransList: Array<any> = [];

  secondaryTransList: Array<any> = [];

  url: string;

  constructor(private productMadService: ProductMadService,
    private activatedRoute: ActivatedRoute,
    private primaryTransService: PrimaryTransService,
    private secondaryTransService: SecondaryTransService,
    private router: Router
    ) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    forkJoin({
      requestPrimaryList: this.primaryTransService.getPrimaryTransList(),
      requestSecondaryList: this.secondaryTransService.getSecondaryTransList()
    })
    .subscribe(({requestPrimaryList, requestSecondaryList}) => {
      this.primaryTransList = requestPrimaryList as Array<any>;
      this.secondaryTransList = requestSecondaryList as Array<any>;

      this.setUpData();
    });
  }

  setUpData() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.productMadService.getOneProductMad(this.id).subscribe(
      (res) => {
        this.productToEdit = res;

        this.editProductForm = new FormGroup({
          codProduct: new FormControl(this.productToEdit.codProduct, [Validators.required]),
          codForestGuide: new FormControl(this.productToEdit.codForestGuide, [Validators.required]),
          productName: new FormControl(this.productToEdit.productName, [Validators.required]),
          sawmillName: new FormControl(this.productToEdit.sawmillName, [Validators.required]),
          dateOfElaboration: new FormControl(this.stringLatamDateToDate(this.productToEdit.dateOfElaboration), [Validators.required]),
          codPlate: new FormControl(this.productToEdit.codPlate, [Validators.required]),
          elaborationTime: new FormControl(this.productToEdit.elaborationTime, [Validators.required]),
          woodType: new FormControl(this.productToEdit.woodType, [Validators.required]),
          idPri: new FormControl(this.productToEdit.primaryTrans.idPri, [Validators.required]),
          idSec: new FormControl(this.productToEdit.secondaryTrans.idSec, [Validators.required]),
          imageBase: new FormControl(this.productToEdit.photo, [Validators.required]),
        });

        this.loading = false;
      },
      (err) => {

      }
    );
  }

  stringLatamDateToDate(dateString: string) {
    const arrDates = dateString.split('-');
    const year = parseInt(arrDates[0]);
    const month = parseInt(arrDates[1]) - 1;
    const day = parseInt(arrDates[2]);

    return new Date(year, month, day);
  }

  applyEditions() {
    const idPri = this.editProductForm.controls['idPri'].value;
    const idSec = this.editProductForm.controls['idSec'].value;

    const primary = this.primaryTransList.find(x => x.idPri == idPri);
    const secondary = this.secondaryTransList.find(x => x.idSec == idSec);

    const formChange = Object.assign({}, this.editProductForm.value);

    const productToSendToEdit: MadProduct = {
      ...formChange,
      id: this.id,
      primaryTrans: primary,
      secondaryTrans: secondary,
    };

    this.productMadService.updateProductMad(productToSendToEdit).subscribe(
      (res) => {
        showToast('success', 'Se actualiz?? con exito');
        this.router.navigate(['/product']);
      },
      (err) => {
        showToast('error', 'Error al crear');
      }
    );

  }

  checkAlphanumeric(evt) {

    if (!this.isAlphaNumeric(evt.key) && evt.key != ' ') {
      evt.preventDefault();
      return false;
    }
  }

  isAlphaNumeric(str) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

  onSelectFile(event) {
    if (event.target.files && event.target.files[0] && event.target.files[0].type.match('image/jpeg')) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event : any) => {
        const splitImgBase = event.target.result as string;

        const stringToSend = splitImgBase;

        this.imgString = stringToSend;

        const imageBase = this.editProductForm.controls['imageBase'];
        imageBase.setValue(this.imgString);

        this.url = event.target.result;

        document.getElementById('uploadInput').style.backgroundImage=`url(${this.url})`;
      }
    }
  }

}
