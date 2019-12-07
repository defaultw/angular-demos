import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-interaction-demo';

  // 父组件通过 @Input 传值给子组件
  public appInputData = ['Baidu', 'Alibaba', 'Tencent'];

  // 通过 setter 截听输入属性值的变化
  public appSetterData = ['work', '', 'sleep', '', 'drink'];
}
