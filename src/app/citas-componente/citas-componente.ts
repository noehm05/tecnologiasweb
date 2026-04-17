import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IndexDbservicio } from '../servicios/index-dbservicio';

@Component({
  selector: 'app-citas-componente',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './citas-componente.html',
})
export class CitasComponente {

  paciente = '';
  doctor = '';
  especialidad = '';
  fecha = '';
  sala = '';

  listaCitas: any[] = [];

  pacientes: any[] = [];
  doctores: any[] = [];

  editando = false;
  indexEditando = -1;

  mostrarLista = false;

  constructor(private db: IndexDbservicio) {}

  ngOnInit() {
    this.cargarTodo();
  }

  async cargarTodo() {
    this.pacientes = await this.db.obtener();
    this.doctores = await this.db.obtenerDoctores();
    this.listaCitas = await this.db.obtenerCitas();
  }

  seleccionarDoctor() {
    const doc = this.doctores.find(d => d.nombre === this.doctor);
    if (doc) {
      this.especialidad = doc.especialidad;
    }
  }

  agregar() {
    const cita = {
      paciente: this.paciente,
      doctor: this.doctor,
      especialidad: this.especialidad,
      fecha: this.fecha,
      sala: this.sala
    };

    this.db.agregarCita(cita);

    setTimeout(() => {
      this.cargarTodo();
    }, 200);

    this.limpiar();
  }

  eliminar(id: number) {
    this.db.eliminarCita(id);

    setTimeout(() => {
      this.cargarTodo();
    }, 200);
  }

  editar(c: any, index: number) {
    this.paciente = c.paciente;
    this.doctor = c.doctor;
    this.especialidad = c.especialidad;
    this.fecha = c.fecha;
    this.sala = c.sala;

    this.editando = true;
    this.indexEditando = index;
  }

  actualizar() {
    const citaActualizada = {
      ...this.listaCitas[this.indexEditando],
      paciente: this.paciente,
      doctor: this.doctor,
      especialidad: this.especialidad,
      fecha: this.fecha,
      sala: this.sala
    };

    this.db.actualizarCita(citaActualizada);

    setTimeout(() => {
      this.cargarTodo();
    }, 200);

    this.editando = false;
    this.limpiar();
  }

  limpiar() {
    this.paciente = '';
    this.doctor = '';
    this.especialidad = '';
    this.fecha = '';
    this.sala = '';
  }

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;

    if (this.mostrarLista) {
      this.cargarTodo();
    }
  }
}