import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'autoCar';
  name = 'Fall Omar';
  nombres = 582000 ;
  text : string = "Application de gestion de parc automobile"
  value: boolean = true;


  changeValue(){
  this.value = !this.value
  }

  constructor(){}
}
