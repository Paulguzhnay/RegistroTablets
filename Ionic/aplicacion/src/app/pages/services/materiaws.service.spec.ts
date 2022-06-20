import { TestBed } from '@angular/core/testing';

import { MateriawsService } from './materiaws.service';

describe('MateriawsService', () => {
  let service: MateriawsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriawsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
