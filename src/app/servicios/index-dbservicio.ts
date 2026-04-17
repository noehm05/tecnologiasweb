import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexDbservicio {

  db: any;

  constructor() {
    const request = indexedDB.open('clinicaDB', 3); 

    request.onupgradeneeded = (event: any) => {
      this.db = event.target.result;

      if (!this.db.objectStoreNames.contains('pacientes')) {
        this.db.createObjectStore('pacientes', { keyPath: 'id', autoIncrement: true });
      }

      if (!this.db.objectStoreNames.contains('doctores')) {
        this.db.createObjectStore('doctores', { keyPath: 'id', autoIncrement: true });
      }

            if (!this.db.objectStoreNames.contains('citas')) {
        this.db.createObjectStore('citas', { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = (event: any) => {
      this.db = event.target.result;
    };
  }


  agregar(p: any) {
    const tx = this.db.transaction('pacientes', 'readwrite');
    tx.objectStore('pacientes').add(p);
  }

  obtener(): Promise<any[]> {
    return new Promise(resolve => {
      const tx = this.db.transaction('pacientes', 'readonly');
      const req = tx.objectStore('pacientes').getAll();
      req.onsuccess = () => resolve(req.result);
    });
  }

  eliminar(id: number) {
    const tx = this.db.transaction('pacientes', 'readwrite');
    tx.objectStore('pacientes').delete(id);
  }

  actualizarPaciente(paciente: any) {
    const tx = this.db.transaction('pacientes', 'readwrite');
    tx.objectStore('pacientes').put(paciente);
  }


  agregarDoctor(d: any) {
    const tx = this.db.transaction('doctores', 'readwrite');
    tx.objectStore('doctores').add(d);
  }

  obtenerDoctores(): Promise<any[]> {
    return new Promise(resolve => {
      const tx = this.db.transaction('doctores', 'readonly');
      const req = tx.objectStore('doctores').getAll();
      req.onsuccess = () => resolve(req.result);
    });
  }

  eliminarDoctor(id: number) {
    const tx = this.db.transaction('doctores', 'readwrite');
    tx.objectStore('doctores').delete(id);
  }

  actualizarDoctor(d: any) {
    const tx = this.db.transaction('doctores', 'readwrite');
    tx.objectStore('doctores').put(d);
  }

  
  agregarCita(c: any) {
    const tx = this.db.transaction('citas', 'readwrite');
    tx.objectStore('citas').add(c);
  }

  obtenerCitas(): Promise<any[]> {
    return new Promise(resolve => {
      const tx = this.db.transaction('citas', 'readonly');
      const req = tx.objectStore('citas').getAll();
      req.onsuccess = () => resolve(req.result);
    });
  }

  eliminarCita(id: number) {
    const tx = this.db.transaction('citas', 'readwrite');
    tx.objectStore('citas').delete(id);
  }

  actualizarCita(c: any) {
    const tx = this.db.transaction('citas', 'readwrite');
    tx.objectStore('citas').put(c);
  }
}