/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserWoodService } from './user-wood.service';

describe('Service: UserWood', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserWoodService]
    });
  });

  it('should ...', inject([UserWoodService], (service: UserWoodService) => {
    expect(service).toBeTruthy();
  }));
});
