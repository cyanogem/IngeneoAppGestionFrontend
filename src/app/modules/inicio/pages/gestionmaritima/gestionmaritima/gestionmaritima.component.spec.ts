import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionmaritimaComponent } from './gestionmaritima.component';

describe('GestionmaritimaComponent', () => {
  let component: GestionmaritimaComponent;
  let fixture: ComponentFixture<GestionmaritimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionmaritimaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionmaritimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
