import { TestBed } from '@angular/core/testing';

import { DocenteswsService } from './docentesws.service';

describe('DocenteswsService', () => {
  let service: DocenteswsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocenteswsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
