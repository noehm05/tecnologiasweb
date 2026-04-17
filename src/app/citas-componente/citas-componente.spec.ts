import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasComponente } from './citas-componente';

describe('CitasComponente', () => {
  let component: CitasComponente;
  let fixture: ComponentFixture<CitasComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitasComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(CitasComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
