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

}
