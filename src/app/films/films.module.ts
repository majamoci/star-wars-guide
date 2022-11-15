import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films/films.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FilmsComponent
  ],
  imports: [
    FilmsRoutingModule,
    SharedModule,
    CommonModule,
  ]
})
export class FilmsModule { }
