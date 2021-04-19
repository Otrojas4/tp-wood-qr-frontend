import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import showToast from 'src/app/utils/toast';
import { SecondaryTransformation } from 'src/_models/secondary-transformation';
import { SecondaryTransService } from 'src/_services/secondary-trans.service';

@Component({
  selector: 'app-list-secondary-transformation',
  templateUrl: './list-secondary-transformation.component.html',
  styleUrls: ['./list-secondary-transformation.component.scss']
})
export class ListSecondaryTransformationComponent implements OnInit {

  secondaryTransformations: Array<SecondaryTransformation> = [];

  constructor(private secondaryTransService: SecondaryTransService, private router: Router) { }

  ngOnInit() {
    this.getSecondaryTransList();
  }

  getSecondaryTransList() {
    this.secondaryTransService.getSecondaryTransList().subscribe(
      (res: Array<SecondaryTransformation> ) => {
        this.secondaryTransformations = res;
      },
      (err: any) => {

      }
    );
  }

  deleteSecondaryTrans(id: number) {
    this.secondaryTransService.deleteSecondaryTrans(id).subscribe(
      (res) => {
        this.secondaryTransformations = this.secondaryTransformations.filter(x => x.idSec !== id);
        showToast('success', 'Se eliminó con exito');
        this.router.navigate(['/secondary-transformation']);
      },
      (err) => {
        showToast('error', 'Error de servidor');
      }
    );
  }

}
