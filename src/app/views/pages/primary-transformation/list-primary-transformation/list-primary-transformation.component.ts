import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import showToast from 'src/app/utils/toast';
import { PrimaryTransformation } from 'src/_models/primary-transformation';
import { PrimaryTransService } from 'src/_services/primary-trans.service';

@Component({
  selector: 'app-list-primary-transformation',
  templateUrl: './list-primary-transformation.component.html',
  styleUrls: ['./list-primary-transformation.component.scss']
})
export class ListPrimaryTransformationComponent implements OnInit {

  primaryTransformations: Array<PrimaryTransformation> = [];

  constructor(private primaryTransService: PrimaryTransService, private router: Router) { }

  ngOnInit() {
    this.getPrimaryTransList();
  }

  getPrimaryTransList() {
    this.primaryTransService.getPrimaryTransList().subscribe(
      (res: Array<PrimaryTransformation> ) => {
        this.primaryTransformations = res;
      },
      (err: any) => {

      }
    );
  }

  deletePrimaryTrans(id: number) {
    this.primaryTransService.deletePrimaryTrans(id).subscribe(
      (res) => {
        this.primaryTransformations = this.primaryTransformations.filter(x => x.idPri !== id);
        showToast('success', 'Se eliminó con exito');
        this.router.navigate(['/primary-transformation']);
      },
      (err) => {
        showToast('error', 'Error de servidor');
      }
    );
  }

}
