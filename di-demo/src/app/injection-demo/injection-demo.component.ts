import { Component, OnInit } from '@angular/core';

import { LoginUserInfoService } from '../service/login-user-info.service';
import { User } from '../User';

@Component({
  selector: 'app-injection-demo',
  templateUrl: './injection-demo.component.html',
  styleUrls: ['./injection-demo.component.css']
})
export class InjectionDemoComponent implements OnInit {
  constructor(private loginUserInfoService: LoginUserInfoService) {}

  public user: User;

  ngOnInit() {
    this.user = this.loginUserInfoService.getUser();
  }
}
