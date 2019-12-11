import { Component, OnInit } from '@angular/core';

import { TService } from '../service/tService';

@Component({
  selector: 'app-child-service-component',
  templateUrl: './child-service-component.component.html',
  styleUrls: ['./child-service-component.component.css']
})
export class ChildServiceComponentComponent {
  constructor(private tService: TService) {}

  setChildValue() {
    this.tService.setData('child data show');
  }
}
