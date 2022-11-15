import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters/characters.service';
import { Character } from '../character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] | any;
  constructor(
    private charactersService: CharactersService,
  ) { }

  ngOnInit(): void {
    this.fetchCharacters();
  }
  fetchCharacters() {
    this.charactersService.getAllCharacters()
    .subscribe(res => {
      this.characters = res;
    });
  }
}
