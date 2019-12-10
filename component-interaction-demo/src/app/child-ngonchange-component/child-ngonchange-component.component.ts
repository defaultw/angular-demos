import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-ngonchange-component',
  templateUrl: './child-ngonchange-component.component.html',
  styleUrls: ['./child-ngonchange-component.component.css']
})
export class ChildNgonchangeComponentComponent implements OnInit, OnChanges {
  @Input() inputValue: string;

  // 存放修改log
  public changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (const proName in changes) {
      if (changes.hasOwnProperty(proName)) {
        // 此处需要判断对象中是否存在key
        const chng = changes[proName];
        const cur = JSON.stringify(chng.currentValue);
        const prev = JSON.stringify(chng.previousValue);
        this.changeLog.push(`${proName}已修改,修改后:${cur},修改前:${prev};`);
      }
    }
  }

  clearLog() {
    this.changeLog = [];
  }

  ngOnInit() {}
}
