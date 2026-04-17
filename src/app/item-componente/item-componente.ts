import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NegociosComponente } from '../negocios-componente/negocios-componente';

@Component({
  selector: 'app-item-componente',
  standalone: true,
  imports: [FormsModule, CommonModule, NegociosComponente],
  templateUrl: './item-componente.html',
})
export class ItemComponente {

  usuario = {
    nombre: '',
    correo: '',
    edad: 0
  };

  mensaje = '';

  registrar() {
    this.mensaje = 'Usuario registrado correctamente';
    console.log(this.usuario);
  }

}