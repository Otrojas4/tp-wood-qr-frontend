import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import showToast from 'src/app/utils/toast';
import { SecondaryTransformation } from 'src/_models/secondary-transformation';
import { SecondaryTransService } from 'src/_services/secondary-trans.service';

@Component({
  selector: 'app-create-secondary-transformation',
  templateUrl: './create-secondary-transformation.component.html',
  styleUrls: ['./create-secondary-transformation.component.scss']
})
export class CreateSecondaryTransformationComponent implements OnInit {

  createSecondaryTransForm: FormGroup;

  maxDate = new Date();

  constructor(
    private secondaryTransService: SecondaryTransService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setUpSecondaryTransForm();
  }

  setUpSecondaryTransForm(): void {
    this.createSecondaryTransForm = new FormGroup({
      codTransSec: new FormControl('', [Validators.required]),
      codMachinaryOne: new FormControl('', [Validators.required]),
      percentageOne: new FormControl('', [Validators.required]),
      codMachinaryTwo: new FormControl('', [Validators.required]),
      percentageTwo: new FormControl('', [Validators.required]),
      dateElaborations: new FormControl('', [Validators.required]),
      timeElaborations: new FormControl(0, [Validators.required]),
    });
  }

  createSecondaryTrans() {
    const primaryTransformationToCreate: SecondaryTransformation = Object.assign({}, this.createSecondaryTransForm.value);

    primaryTransformationToCreate.timeElaborations = parseFloat(primaryTransformationToCreate.timeElaborations.toString());

    const date: Date = primaryTransformationToCreate.dateElaborations as unknown as Date;

    primaryTransformationToCreate.dateElaborations = date.toISOString();


    this.secondaryTransService.createSecondaryTrans(primaryTransformationToCreate).subscribe(
      (res) => {
        showToast('success', 'Se creó con exito');
        this.router.navigate(['/secondary-transformation']);
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
