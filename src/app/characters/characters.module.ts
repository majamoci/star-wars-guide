import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailComponent,
    CreateComponent
  ],
  imports: [
    CharactersRoutingModule,
    SharedModule,
    CommonModule,
  ]
})
export class CharactersModule { }
