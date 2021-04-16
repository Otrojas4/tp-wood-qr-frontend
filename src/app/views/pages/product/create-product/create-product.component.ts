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


  woodTypes = ['Nogal', 'Olmo', 'Caoba', 'Cerezo', 'Roble', 'Olivo', 'Abeto', 'Pino', 'Cedro'];

  maxDate = new Date();

  createProductForm: FormGroup;

  primaryTransList: Array<any> = [];

  secondaryTransList: Array<any> = [];


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
    });
  }

  createProduct(): void {
    if(this.createProductForm.valid) {
      const madProductToCreate: MadProductToCreate = Object.assign({}, this.createProductForm.value);
      madProductToCreate.elaborationTime = parseFloat(parseFloat(madProductToCreate.elaborationTime.toString()).toFixed(2));
      madProductToCreate.idPri = parseInt(madProductToCreate.idPri.toString());
      madProductToCreate.idSec = parseInt(madProductToCreate.idSec.toString());

      this.productMadService.createProductMad(madProductToCreate).subscribe(
        (res) => {
          showToast('success', 'Se creó con exito');
          this.router.navigate(['/product']);
        },
        (err) => {
          showToast('error', 'Error al crear');
        }
      );
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

}
