import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const  matModules: any =[
   MatSidenavModule,
   MatButtonModule ,
   MatIconModule,
   MatToolbarModule];

@NgModule({
  declarations: [
     HeaderComponent,
     FooterComponent
  ],
  imports: [
    CommonModule,
   // matModules
  ],
  exports:[
    // HeaderComponent,
    // FooterComponent,
   // matModules
  ]
})
export class SharedModule { }
