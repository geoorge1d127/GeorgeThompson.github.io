import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notas: any;
  agregando: boolean = false;
  titulo: string = ''
  contenido: string = ''
  ngOnInit()
  {
    this.notas = []
    this.notas.push({"titulo": "Ejemplo", "contenido": "Este es una nota"})
  }
  agregar()
  {
    this.agregando = !this.agregando
    this.titulo = ''
    this.contenido = ''
  }
  agregarNota()
  {
    this.notas.push({"titulo": this.titulo, "contenido": this.contenido})
    this.agregando = false
    this.titulo = ''
    this.contenido = ''
  }
}
