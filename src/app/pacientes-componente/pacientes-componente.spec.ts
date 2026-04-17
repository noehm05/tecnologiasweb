import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesComponente } from './pacientes-componente';

describe('PacientesComponente', () => {
  let component: PacientesComponente;
  let fixture: ComponentFixture<PacientesComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientesComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(PacientesComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
