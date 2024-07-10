import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import {  } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatMenuModule } from '@angular/material/menu'

@NgModule({
    declarations: [
      LayoutComponent,
      ToolbarComponent,
      FooterComponent
    ],
    imports: [
      CommonModule,
      LayoutRoutingModule,
      OverlayModule,
      MatToolbarModule,
      MatIconModule,
      FlexLayoutModule,
      MatMenuModule
    ]
  })
  export class LayoutModule { }