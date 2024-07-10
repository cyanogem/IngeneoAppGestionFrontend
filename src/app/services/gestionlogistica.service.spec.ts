import { TestBed } from '@angular/core/testing';

import { GestionlogisticaService } from './gestionlogistica.service';

describe('GestionlogisticaService', () => {
  let service: GestionlogisticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionlogisticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
