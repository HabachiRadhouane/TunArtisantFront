import { TestBed } from '@angular/core/testing';

import { InscriptioneventService } from './inscriptionevent.service';

describe('InscriptioneventService', () => {
  let service: InscriptioneventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InscriptioneventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
