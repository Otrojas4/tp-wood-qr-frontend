/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductMadService } from './product-mad.service';

describe('Service: ProductMad', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductMadService]
    });
  });

  it('should ...', inject([ProductMadService], (service: ProductMadService) => {
    expect(service).toBeTruthy();
  }));
});
