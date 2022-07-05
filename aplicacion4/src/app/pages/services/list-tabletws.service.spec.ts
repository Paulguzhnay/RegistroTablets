import { TestBed } from '@angular/core/testing';

import { ListTabletwsService } from './list-tabletws.service';

describe('ListTabletwsService', () => {
  let service: ListTabletwsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListTabletwsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
