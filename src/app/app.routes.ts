import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VehiculesComponent } from './vehicules/vehicules.component';


export const routes: Routes = [
{ path: '', component: AppComponent  },
{path: 'navBar', component:NavbarComponent},
{path:'vehicules', component:VehiculesComponent}
];
