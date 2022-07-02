import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTabletsComponent } from './update-tablets.component';

describe('UpdateTabletsComponent', () => {
  let component: UpdateTabletsComponent;
  let fixture: ComponentFixture<UpdateTabletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTabletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTabletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
