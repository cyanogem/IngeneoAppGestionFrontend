import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: 'gestion',
          pathMatch: 'full'
         },
        {
          path: 'gestion',
          loadChildren: () =>
            import('src/app/modules/inicio/inicio.module').then((m) => m.InicioModule),
        }
      ],
    },
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class LayoutRoutingModule {}
