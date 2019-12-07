import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-set-component',
  templateUrl: './child-set-component.component.html',
  styleUrls: ['./child-set-component.component.css']
})
export class ChildSetComponentComponent {
  // 通过setter截听输入值的变化
  private item = '';
  @Input() set childSetter(temp: string) {
    this.item = temp.trim() || 'Touch the fish';
  }

  get childSetter(): string {
    return this.item;
  }
}
