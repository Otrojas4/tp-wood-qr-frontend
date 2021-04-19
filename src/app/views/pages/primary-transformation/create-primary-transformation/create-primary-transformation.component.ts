import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import showToast from 'src/app/utils/toast';
import { PrimaryTransformation } from 'src/_models/primary-transformation';
import { AuthService } from 'src/_services/auth.service';
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
    private authService: AuthService
  ) {
    this.localeService.use('es');
  }

  ngOnInit() {
    this.setUpPrimaryTransForm();
  }

  isAdmin() {
    return this.authService.isAdmin();
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

    if (!this.isAlphaNumeric(evt.key)) {
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
