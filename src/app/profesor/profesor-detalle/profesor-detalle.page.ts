import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/alumnos/alumnos.service';

@Component({
  selector: 'app-profesor-detalle',
  templateUrl: './profesor-detalle.page.html',
  styleUrls: ['./profesor-detalle.page.scss'],
})
export class ProfesorDetallePage implements OnInit {

  profesores: any = []

  constructor(private servicio:AlumnosService) { }

  ngOnInit() {
    this.cargarData();
  }

  cargarData(){
    this.servicio.obtenerProfesor().subscribe(
      (res) =>{
        this.profesores = res
      },
      (err) => {

      }
    )
  }


}
