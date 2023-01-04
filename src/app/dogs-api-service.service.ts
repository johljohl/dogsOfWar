import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DogsApiResponse } from './DogsApiResponse';
import { DogsApiTwo } from './DogsApiTwo';

@Injectable({
  providedIn: 'root',
})
export class DogsApiServiceService {
  constructor(private _httpClient: HttpClient) {}

  getDogsOfWar() {
    return this._httpClient.get<DogsApiResponse>(
      'https://dog.ceo/api/breeds/image/random'
    );
  }
}
