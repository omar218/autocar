import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from '../component/vehicule/vehicule.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  { path: 'vehicules', component: VehiculeComponent },

  { path: '/', component: AppComponent },
];

@NgModule({
  declarations: [AppComponent, VehiculeComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
