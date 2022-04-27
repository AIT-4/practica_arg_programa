// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const appDiv2: HTMLElement = document.getElementById('app2');
appDiv2.innerHTML = ;

class Persona {
  private nombre: string;
  private apellido: string;
  private añoNac: number;
  constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  public nombreApellido(nombre,apellido): string {
    return this.nombre + this.apellido;
  }
}