import { Component, OnInit } from '@angular/core';
import { PrimaryTransformation } from 'src/_models/primary-transformation';
import { PrimaryTransService } from 'src/_services/primary-trans.service';

@Component({
  selector: 'app-list-primary-transformation',
  templateUrl: './list-primary-transformation.component.html',
  styleUrls: ['./list-primary-transformation.component.scss']
})
export class ListPrimaryTransformationComponent implements OnInit {

  primaryTransformations: Array<PrimaryTransformation> = [];

  constructor(private primaryTransService: PrimaryTransService) { }

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

}
