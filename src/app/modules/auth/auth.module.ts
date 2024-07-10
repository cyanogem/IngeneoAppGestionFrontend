import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

import { AuthRoutingModule } from 'src/app/modules/auth/auth-routing.module'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { RegistroFormComponent } from './components/registro-form/registro-form.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
    declarations: [
    LoginComponent,
    LoginFormComponent,
    RegistroFormComponent
  ],
    imports: [
      FlexLayoutModule,
      CommonModule,
      AuthRoutingModule,
      ReactiveFormsModule,
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatSelectModule,
      MatTableModule,
      MatMenuModule,
      MatIconModule,
      MatSlideToggleModule,
      MatOptionModule,
      MatGridListModule,
      MatSidenavModule,
      MatTabsModule,
      MatSnackBarModule

    ]
  })
  export class AuthModule { }
