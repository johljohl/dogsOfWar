import { TestBed } from '@angular/core/testing';

import { DogsApiServiceService } from './dogs-api-service.service';

describe('DogsApiServiceService', () => {
  let service: DogsApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
