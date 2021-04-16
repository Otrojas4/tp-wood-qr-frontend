/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PrimaryTransService } from './primary-trans.service';

describe('Service: PrimaryTrans', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrimaryTransService]
    });
  });

  it('should ...', inject([PrimaryTransService], (service: PrimaryTransService) => {
    expect(service).toBeTruthy();
  }));
});
