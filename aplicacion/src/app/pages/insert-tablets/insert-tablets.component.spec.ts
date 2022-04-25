import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertTabletsComponent } from './insert-tablets.component';

describe('InsertTabletsComponent', () => {
  let component: InsertTabletsComponent;
  let fixture: ComponentFixture<InsertTabletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertTabletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertTabletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
