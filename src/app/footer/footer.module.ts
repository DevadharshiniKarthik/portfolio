import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FooterComponent } from './footer.component';

const routes: Routes = [
  {
    path: '',
    component: FooterComponent,
  }
];

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule,
    ReactiveFormsModule,
  ]
})
export class FooterModule { }
