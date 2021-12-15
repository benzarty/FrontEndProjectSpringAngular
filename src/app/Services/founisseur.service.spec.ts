import { TestBed } from '@angular/core/testing';

import { FounisseurService } from './founisseur.service';

describe('FounisseurService', () => {
  let service: FounisseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FounisseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
