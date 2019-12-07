import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-input-component',
  templateUrl: './child-input-component.component.html',
  styleUrls: ['./child-input-component.component.css']
})
export class ChildInputComponentComponent {
  // 父组件通过 @Input 传值给子组件
  @Input() childInputData: any;
}
