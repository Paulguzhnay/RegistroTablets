import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEstudiantesComponent } from './update-estudiantes.component';

describe('UpdateEstudiantesComponent', () => {
  let component: UpdateEstudiantesComponent;
  let fixture: ComponentFixture<UpdateEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEstudiantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
