import { Component } from '@angular/core';

@Component({
  selector: 'app-child-value-component',
  templateUrl: './child-value-component.component.html',
  styleUrls: ['./child-value-component.component.css']
})
export class ChildValueComponentComponent {
  // 本地变量
  public localValue = 'This is a local value.';

  // 本地方法
  localFunction() {
    this.localValue = 'Change the local value!';
  }
}
