import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../../../characters/character.model';

import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }
  getAllCharacters() {
    return this.http.get<Character[]>(`${environment.url_swapi}/characters`);
  }
  getCharacter(id:number) {
    return this.http.get<Character>(`${environment.url_swapi}/people/${id}`);
  }
}
