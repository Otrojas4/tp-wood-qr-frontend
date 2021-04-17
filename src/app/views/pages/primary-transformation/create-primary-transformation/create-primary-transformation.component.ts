import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import showToast from 'src/app/utils/toast';
import { PrimaryTransformation } from 'src/_models/primary-transformation';
import { PrimaryTransService } from 'src/_services/primary-trans.service';

@Component({
  selector: 'app-create-primary-transformation',
  templateUrl: './create-primary-transformation.component.html',
  styleUrls: ['./create-primary-transformation.component.scss']
})
export class CreatePrimaryTransformationComponent implements OnInit {

  createPrimaryTransForm: FormGroup;

  maxDate = new Date();


  constructor(
    private primaryTransService: PrimaryTransService,
    private router: Router,
    private localeService: BsLocaleService,
  ) {
    this.localeService.use('es');
  }

  ngOnInit() {
    this.setUpPrimaryTransForm();
  }

  setUpPrimaryTransForm(): void {
    this.createPrimaryTransForm = new FormGroup({
      codTransPri: new FormControl('', [Validators.required]),
      codMachineryOne: new FormControl('', [Validators.required]),
      percentageOne: new FormControl('', [Validators.required]),
      codMachineryTwo: new FormControl('', [Validators.required]),
      percentageTwo: new FormControl('', [Validators.required]),
      dateElaborationP: new FormControl('', [Validators.required]),
      timeElaborationP: new FormControl(0, [Validators.required]),
    });
  }

  createPrimaryTrans() {
    const primaryTransformationToCreate: PrimaryTransformation = Object.assign({}, this.createPrimaryTransForm.value);

    primaryTransformationToCreate.timeElaborationP = parseFloat(primaryTransformationToCreate.timeElaborationP.toString());

    const date: Date = primaryTransformationToCreate.dateElaborationP as unknown as Date;

    primaryTransformationToCreate.dateElaborationP = date.toISOString();


    this.primaryTransService.createPrimaryTrans(primaryTransformationToCreate).subscribe(
      (res) => {
        showToast('success', 'Se creó con exito');
        this.router.navigate(['/primary-transformation']);
      },
      (err) => {
        showToast('error', 'Error al crear');
      }
    );

  }

}
