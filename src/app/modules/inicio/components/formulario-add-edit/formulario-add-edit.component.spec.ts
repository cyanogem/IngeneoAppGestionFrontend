import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAddEditComponent } from './formulario-add-edit.component';

describe('FormularioAddEditComponent', () => {
  let component: FormularioAddEditComponent;
  let fixture: ComponentFixture<FormularioAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
