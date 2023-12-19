import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent {
  notas: any;

  constructor(private router: Router, private http: HttpClient)
  {
    this.notas = this.router.getCurrentNavigation()?.extras.state as Array<any>
  }
  ngOnInit()
  {

    this.http.get("/notas").subscribe((data)=>{
      this.notas = data
      console.log(data)
    })
    // if(this.notas == undefined)
    // {
    //   this.notas = []
    // }
    // console.log(typeof(this.notas))
  }
  agregar()
  {
    this.router.navigate(['/agregar'], {state: this.notas as Array<any>})
  }
  borrar(notaId: string)
  {
    this.http.delete("/notas/" + notaId).subscribe((data)=>
    {
      console.log(data)
      this.ngOnInit()
    })
  }
 
}
