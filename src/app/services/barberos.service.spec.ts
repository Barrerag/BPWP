import { TestBed } from '@angular/core/testing';

import { BarberosService } from './barberos.service';

describe('BarberosService', () => {
  let service: BarberosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarberosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
