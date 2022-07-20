import { TestBed } from '@angular/core/testing';

import { AfliccionService } from './afliccion.service';

describe('AfliccionService', () => {
  let service: AfliccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfliccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
