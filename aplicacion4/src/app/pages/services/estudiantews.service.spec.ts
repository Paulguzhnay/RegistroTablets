import { TestBed } from '@angular/core/testing';

import { EstudiantewsService } from './estudiantews.service';

describe('EstudiantewsService', () => {
  let service: EstudiantewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudiantewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
