import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IndexDbservicio } from '../servicios/index-dbservicio';

@Component({
  selector: 'app-doctores-componente',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './doctores-componente.html',
})
export class DoctoresComponente {

  nombre = '';
  especialidad = '';

  listaDoctores: any[] = [];

  editando = false;
  indexEditando = -1;

  mostrarLista = false;

  constructor(private db: IndexDbservicio) {}

  ngOnInit() {
    setTimeout(() => {
      this.cargar();
    }, 500);
  }

  agregar() {
    const doctor = {
      tipo: 'doctor',
  nombre: this.nombre,
  especialidad: this.especialidad
    };

    this.db.agregarDoctor(doctor);
    this.listaDoctores.push(doctor);

    this.limpiar();
  }

  cargar() {
    this.db.obtenerDoctores().then(data => {
      this.listaDoctores = data;
    });
  }

  eliminar(id: number, index: number) {
    this.db.eliminarDoctor(id);
    this.listaDoctores.splice(index, 1);
  }

  editar(d: any, index: number) {
    this.nombre = d.nombre;
    this.especialidad = d.especialidad;

    this.editando = true;
    this.indexEditando = index;
  }

   actualizar() {
    const doctorActualizado = {
      ...this.listaDoctores[this.indexEditando], 
      nombre: this.nombre,
      especialidad: this.especialidad
    };

  
    this.db.actualizarDoctor(doctorActualizado);

    this.listaDoctores[this.indexEditando] = doctorActualizado;

    this.editando = false;
    this.limpiar();
  }

  limpiar() {
    this.nombre = '';
    this.especialidad = '';
  }

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }
}