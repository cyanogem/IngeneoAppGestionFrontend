import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { MatFormFieldModule } from '@angular/material/form-field'

import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
// npm install moment --save
// npm i @angular/material-moment-adapter@14.2.7
// import { MatMomentDateModule } from '@angular/material-moment-adapter'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatDialogModule } from '@angular/material/dialog'
import { MatGridListModule } from '@angular/material/grid-list';
import { GestionmaritimaComponent } from './pages/gestionmaritima/gestionmaritima/gestionmaritima.component';
import { FormularioAddEditComponent } from './components/formulario-add-edit/formulario-add-edit.component';
import { ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    InicioComponent,
    GestionmaritimaComponent,
    FormularioAddEditComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class InicioModule { }
