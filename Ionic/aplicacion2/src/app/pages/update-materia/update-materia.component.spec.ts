import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMateriaComponent } from './update-materia.component';

describe('UpdateMateriaComponent', () => {
  let component: UpdateMateriaComponent;
  let fixture: ComponentFixture<UpdateMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMateriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
