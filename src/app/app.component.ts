import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'paymentApp';

  //Objeto persona
  
  persona = {
    persona_id: 1,
    persona_nombre: "Pedro"
  }

  persona1 = {
    id: 2,
    nombre: "Miguel"
  }

  reporte = {
    persona_nombre: 'Persona',
    empresa_nombre: "empresa"
  }

}
