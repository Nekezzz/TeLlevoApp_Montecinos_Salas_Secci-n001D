import { TestBed } from '@angular/core/testing';

import { RegistroFService } from './registro-f.service';

describe('RegistroFService', () => {
  let service: RegistroFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
