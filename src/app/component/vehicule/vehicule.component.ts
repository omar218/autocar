import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicule',
  standalone: true,
  imports: [],
  templateUrl: './vehicule.component.html',
  styleUrl: './vehicule.component.css'
})
export class VehiculeComponent {

  name = "Honda"
  prix = 200000.0000
  color = "green"

}
