import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoresComponente } from './doctores-componente';

describe('DoctoresComponente', () => {
  let component: DoctoresComponente;
  let fixture: ComponentFixture<DoctoresComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctoresComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctoresComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
