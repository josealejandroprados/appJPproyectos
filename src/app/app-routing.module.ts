import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LlaverosComponent } from './llaveros/llaveros.component';
import { PortaLapicesComponent } from './porta-lapices/porta-lapices.component';
import { FlorerosComponent } from './floreros/floreros.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'llaveros', component: LlaverosComponent},
  {path:'portalapices', component: PortaLapicesComponent},
  {path:'floreros', component: FlorerosComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
