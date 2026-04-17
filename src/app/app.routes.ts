import { Routes } from '@angular/router';
import { PacientesComponente } from './pacientes-componente/pacientes-componente';
import { DoctoresComponente } from './doctores-componente/doctores-componente';
import { CitasComponente } from './citas-componente/citas-componente';

export const routes: Routes = [
  { path: 'pacientes', component: PacientesComponente },
  { path: 'doctores', component: DoctoresComponente },
  { path: 'citas', component: CitasComponente },
  { path: '', redirectTo: 'pacientes', pathMatch: 'full' }
];