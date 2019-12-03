import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class UserInfoService {
  abstract getUser(): void;
  constructor() {}
}
