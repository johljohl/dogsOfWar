import { Component, OnInit } from '@angular/core';
import { DogsApiServiceService } from './dogs-api-service.service';
import { DogsApiResponse } from './DogsApiResponse';
import { DogsApiTwo } from './DogsApiTwo';

@Component({
  selector: 'app-root',
  template: `<h1>Dogs of War</h1>
    <img src="{{ dogsImgCreated.message }}" alt="" />
    <button (click)="refersh()">Refresh</button>`,
  styles: [
    `
      h1 {
        color: green;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  title = 'Dogs of War';
  constructor(private _DogsApiServiceService: DogsApiServiceService) {}
  dogsImgCreated: DogsApiResponse = { message: '' };

  refersh() {
    this.ngOnInit();
  }
  ngOnInit(): void {
    this._DogsApiServiceService.getDogsOfWar().subscribe((data) => {
      this.dogsImgCreated = data;
    });
  }
}
