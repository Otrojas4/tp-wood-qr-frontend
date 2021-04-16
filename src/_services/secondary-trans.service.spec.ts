/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SecondaryTransService } from './secondary-trans.service';

describe('Service: SecondaryTrans', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecondaryTransService]
    });
  });

  it('should ...', inject([SecondaryTransService], (service: SecondaryTransService) => {
    expect(service).toBeTruthy();
  }));
});
