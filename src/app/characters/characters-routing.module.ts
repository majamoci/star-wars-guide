import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersComponent } from './characters/characters.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    data: {
      breadcrumb: 'PERSONAJES',
    },
  },

  {
    path: 'character-detail',
    component: CharacterDetailComponent,
    data: {
      breadcrumb: 'DETALLE-PERSONAJE',
    },
  },
  {
    path: 'create',
    component: CreateComponent,
    data: {
      breadcrumb: 'CREAR PERSONAJE',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
