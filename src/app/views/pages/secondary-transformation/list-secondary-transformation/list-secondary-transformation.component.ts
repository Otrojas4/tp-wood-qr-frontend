import { Component, OnInit } from '@angular/core';
import { SecondaryTransformation } from 'src/_models/secondary-transformation';
import { SecondaryTransService } from 'src/_services/secondary-trans.service';

@Component({
  selector: 'app-list-secondary-transformation',
  templateUrl: './list-secondary-transformation.component.html',
  styleUrls: ['./list-secondary-transformation.component.scss']
})
export class ListSecondaryTransformationComponent implements OnInit {

  secondaryTransformations: Array<SecondaryTransformation> = [];

  constructor(private secondaryTransService: SecondaryTransService) { }

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

}
