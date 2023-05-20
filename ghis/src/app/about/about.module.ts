import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports:[RouterModule]
})
export class AboutModule { }
