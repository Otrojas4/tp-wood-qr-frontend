import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { forkJoin } from 'rxjs';
import showToast from 'src/app/utils/toast';
import { MadProductToCreate } from 'src/_models/mad-product-to-create';
import { PrimaryTransService } from 'src/_services/primary-trans.service';
import { ProductMadService } from 'src/_services/product-mad.service';
import { SecondaryTransService } from 'src/_services/secondary-trans.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  imgString: string;

  woodTypes = ['Nogal', 'Olmo', 'Caoba', 'Cerezo', 'Roble', 'Olivo', 'Abeto', 'Pino', 'Cedro'];

  maxDate = new Date();

  createProductForm: FormGroup;

  primaryTransList: Array<any> = [];

  secondaryTransList: Array<any> = [];

  url: string;

  constructor(
    private localeService: BsLocaleService,
    private primaryTransService: PrimaryTransService,
    private secondaryTransService: SecondaryTransService,
    private productMadService: ProductMadService,
    private router: Router
    ) {
    this.localeService.use('es');
  }

  ngOnInit(): void {
    this.getData();
    this.setUpCreateProductForm();
  }

  setUpCreateProductForm(): void {
    this.createProductForm = new FormGroup({
      codProduct: new FormControl('', [Validators.required]),
      codForestGuide: new FormControl('', [Validators.required]),
      productName: new FormControl('', [Validators.required]),
      sawmillName: new FormControl('', [Validators.required]),
      dateOfElaboration: new FormControl('', [Validators.required]),
      codPlate: new FormControl('', [Validators.required]),
      elaborationTime: new FormControl(0, [Validators.required]),
      woodType: new FormControl('', [Validators.required]),
      idPri: new FormControl(0, [Validators.required, Validators.min(1)]),
      idSec: new FormControl(0, [Validators.required, Validators.min(1)]),
      imageBase: new FormControl('', [Validators.required]),
    });
  }

  createProduct(): void {
    if(this.createProductForm.valid) {
      const madProductToCreate: MadProductToCreate = Object.assign({}, this.createProductForm.value);
      madProductToCreate.elaborationTime = parseFloat(parseFloat(madProductToCreate.elaborationTime.toString()).toFixed(2));
      madProductToCreate.idPri = parseInt(madProductToCreate.idPri.toString());
      madProductToCreate.idSec = parseInt(madProductToCreate.idSec.toString());

      //madProductToCreate.imageBase = '';

      this.productMadService.createProductMad(madProductToCreate).subscribe(
        (res) => {
          showToast('success', 'Se creó con exito');
          this.router.navigate(['/product']);
        },
        (err) => {
          showToast('error', err.error.localizedMessage);
        }
      );
    }

  }

  onSelectFile(event) {
    if (event.target.files[0].size > 78768) {
      showToast('info', 'La imagen no debe superar más de 80KB');
      return;
    }

    if (event.target.files && event.target.files[0] && event.target.files[0].type.match('image/jpeg')) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event : any) => {
        const splitImgBase = event.target.result as string;

        const stringToSend = splitImgBase;

        this.imgString = stringToSend;

        const imageBase = this.createProductForm.controls['imageBase'];
        imageBase.setValue(this.imgString);

        this.url = event.target.result;

        document.getElementById('uploadInput').style.backgroundImage=`url(${this.url})`;
      }
    }
  }

  getData(): void {
    forkJoin({
      requestPrimaryList: this.primaryTransService.getPrimaryTransList(),
      requestSecondaryList: this.secondaryTransService.getSecondaryTransList()
    })
    .subscribe(({requestPrimaryList, requestSecondaryList}) => {
      this.primaryTransList = requestPrimaryList as Array<any>;
      this.secondaryTransList = requestSecondaryList as Array<any>;
    });
  }

  keyPressNumbers(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
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


}
