import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicules',
  standalone: true,
  imports: [],
  templateUrl: './vehicules.component.html',
  styleUrl: './vehicules.component.css'
})

export class VehiculesComponent {

        vehicules:{id:Number , marque : string , prix: Number};

  constructor(){
    this.vehicules = {
      id : 1 ,
      marque: 'mercedes',
      prix:30000000,
    }
  }
}

interface vehicule {
  id : Number,
  marque : String,
  prix : Number,
  
}
