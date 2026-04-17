import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IndexDbservicio } from '../servicios/index-dbservicio';

@Component({
  selector: 'app-pacientes-componente',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pacientes-componente.html',
})
export class PacientesComponente {

  nombre = '';
  edad: number | null = null;

  listaPacientes: any[] = [];

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
    const paciente = {
      tipo: 'paciente',
  nombre: this.nombre,
  edad: this.edad
    };

    this.db.agregar(paciente);
    this.listaPacientes.push(paciente);

    this.limpiar();
  }

  cargar() {
    this.db.obtener().then(data => {
      this.listaPacientes = data;
    });
  }

  eliminar(id: number, index: number) {
    this.db.eliminar(id);
    this.listaPacientes.splice(index, 1);
  }

  editar(p: any, index: number) {
    this.nombre = p.nombre;
    this.edad = p.edad;

    this.editando = true;
    this.indexEditando = index;
  }

  actualizar() {
  const pacienteActualizado = {
    ...this.listaPacientes[this.indexEditando], 
    nombre: this.nombre,
    edad: this.edad
  };

  
  this.db.actualizarPaciente(pacienteActualizado);

 
  this.listaPacientes[this.indexEditando] = pacienteActualizado;

  this.editando = false;
  this.limpiar();
}

  limpiar() {
    this.nombre = '';
    this.edad = null;
  }

  
  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }
}