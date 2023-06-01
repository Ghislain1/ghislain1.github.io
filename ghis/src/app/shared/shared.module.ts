import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { Header2Component } from './components/header2/header2.component';

const  matModules: any =[
   MatSidenavModule,
   MatButtonModule ,
   MatIconModule,
   MatSlideToggleModule,
   MatToolbarModule,
   MatIconModule,
   MatButtonModule,
   MatSidenavModule,
   MatCardModule,
   MatToolbarModule];

@NgModule({
  declarations: [
     HeaderComponent,
     FooterComponent,
     PageNotFoundComponent,
     Header2Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    matModules
  ],
  exports:[
     PageNotFoundComponent,
     HeaderComponent,
     Header2Component,
     FooterComponent,
     RouterModule,
     matModules
  ]
})
export class SharedModule { }
