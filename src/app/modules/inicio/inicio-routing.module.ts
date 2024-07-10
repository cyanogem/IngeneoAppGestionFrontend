import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard'
import { InicioComponent } from 'src/app/modules/inicio/pages/inicio/inicio.component';
import { GestionmaritimaComponent } from './pages/gestionmaritima/gestionmaritima/gestionmaritima.component';

const routes: Routes = [
    {
      path: '',
      canActivate:[ AuthGuard],
      component: InicioComponent,
      title: 'Inicio'
    },
    { path: 'maritima', component: GestionmaritimaComponent },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class InicioRoutingModule { }
