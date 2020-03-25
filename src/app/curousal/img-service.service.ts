import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ImgServiceService  {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get('assets/data.json').pipe(map(res => res));
  }
}
