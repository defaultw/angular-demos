import { Component, ViewChild } from '@angular/core';

import {
    ChildNgonchangeComponentComponent
} from './child-ngonchange-component/child-ngonchange-component.component';
import {
    ChildViewchildComponentComponent
} from './child-viewchild-component/child-viewchild-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * 属性装饰器，用于配置一个视图查询。
   * 变更检测器会在视图的 DOM 中查找能匹配上该选择器的第一个元素或指令.
   * 如果视图的 DOM 发生了变化，出现了匹配该选择器的新的子节点，该属性就会被更新。
   *
   * 此处用在 通过 ngOnChanges()截听属性值的变化
   */
  @ViewChild(ChildNgonchangeComponentComponent, { static: false })
  onChangeChild: ChildNgonchangeComponentComponent;

  @ViewChild(ChildViewchildComponentComponent, { static: false })
  private viewChild: ChildViewchildComponentComponent;

  title = 'component-interaction-demo';

  // 父组件通过 @Input 传值给子组件
  public appInputData = ['Baidu', 'Alibaba', 'Tencent'];

  // 通过 setter 截听输入属性值的变化
  public appSetterData = ['work', '', 'sleep', '', 'drink'];

  // 通过 ngOnChanges()截听属性值的变化
  public appInputValue: string;

  // 通过 @Output 弹射事件到父组件
  public outputEvent: string;

  resetInputValue() {
    this.appInputValue = 'init';
    if (this.onChangeChild) {
      this.onChangeChild.clearLog();
    }
  }

  appOnClick(isClick: boolean) {
    if (isClick) {
      this.outputEvent = '成功';
    }
  }

  viewChildClick() {
    this.viewChild.click();
  }
}
