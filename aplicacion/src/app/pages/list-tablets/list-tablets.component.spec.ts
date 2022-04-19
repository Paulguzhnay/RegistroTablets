import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTabletsComponent } from './list-tablets.component';

describe('ListTabletsComponent', () => {
  let component: ListTabletsComponent;
  let fixture: ComponentFixture<ListTabletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTabletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTabletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
