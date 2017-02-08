import { Injectable } from '@angular/core';

import {Router} from '@angular2/router';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

@Injectable()
export class AuthService {

  constructor() { }

}
