import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CollapseModule } from 'ngx-bootstrap/collapse';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule,
    ReactiveFormsModule,
    // TabsModule.forRoot(),
  ]
})
export class HomeModule { }
