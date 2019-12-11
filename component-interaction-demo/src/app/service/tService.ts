import { Injectable } from '@angular/core';

@Injectable()
export class TService {
  public info = '';
  constructor() {}

  setData(value: string) {
    this.info = value;
    console.log('设置：' + value);
  }

  getData() {
    console.log('获取：' + this.info);
    return this.info;
  }
}
