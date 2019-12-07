import { Component, OnInit } from '@angular/core';

import { UserInfoService } from '../service/user-info.service';
import { User } from '../User';

@Component({
  selector: 'app-injection-demo',
  templateUrl: './injection-demo.component.html',
  styleUrls: ['./injection-demo.component.css']
})
export class InjectionDemoComponent implements OnInit {
  constructor(private userInfoService: UserInfoService) {}

  public user: User;

  ngOnInit() {
    this.user = this.userInfoService.getUser();
  }
}
