import { Injectable } from '@angular/core';

import { User } from '../User';
import { UserInfoService } from './user-info.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutUserInfoService implements UserInfoService {
  getUser() {
    return new User(2, 'logout');
  }
  constructor() {}
}
