import { Component } from '@angular/core';

@Component({
  selector: 'app-child-viewchild-component',
  templateUrl: './child-viewchild-component.component.html',
  styleUrls: ['./child-viewchild-component.component.css']
})
export class ChildViewchildComponentComponent {
  public viewChildValue = 'befor change';
  click() {
    this.viewChildValue = 'after change';
  }
}
