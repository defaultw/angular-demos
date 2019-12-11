import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-output-component',
  templateUrl: './child-output-component.component.html',
  styleUrls: ['./child-output-component.component.css']
})
export class ChildOutputComponentComponent {
  // 暴露自定义事件onClick()
  @Output() onclick = new EventEmitter<boolean>();

  click(isClick: boolean) {
    // click普通方法
    this.onclick.emit(isClick); // 向父组件弹射isClick变量，在被点击时候出发
  }
}
