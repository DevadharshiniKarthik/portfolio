import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SkillComponent } from './skill.component';


const routes: Routes = [
  {
    path: '',
    component: SkillComponent,
  }
];

@NgModule({
  declarations: [
    SkillComponent
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
export class SkillModule { }
