import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  baseUrl: string = 'https://reqres.in';

  constructor() { }
}
