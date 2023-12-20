import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements  OnInit, OnDestroy {

  public lista: any[] = [];

  constructor(private http: HttpClient){}

  //Inicializador
  ngOnInit(): void {
    this.http.get('http://localhost/tiendasmilan/api/rest/producto/obtenerListaProductoPaginadoPorLocal/1/-1/-1/-1/-1/1/10?token=MjM0MjMyMw')
      .subscribe((data: any) => {
        this.lista = data?.data;
      });
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
}
