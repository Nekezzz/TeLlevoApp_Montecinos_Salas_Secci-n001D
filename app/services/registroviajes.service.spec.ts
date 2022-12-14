import { TestBed } from '@angular/core/testing';

import { RegistroviajesService } from './registroviajes.service';

describe('RegistroviajesService', () => {
  let service: RegistroviajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroviajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
