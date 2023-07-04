import { TestBed } from '@angular/core/testing';

import { NewsapiserviceService } from './newsapiservice.service';

describe('NewsapiserviceService', () => {
  let service: NewsapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
