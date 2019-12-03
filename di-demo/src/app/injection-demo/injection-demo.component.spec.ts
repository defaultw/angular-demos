import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionDemoComponent } from './injection-demo.component';

describe('InjectionDemoComponent', () => {
  let component: InjectionDemoComponent;
  let fixture: ComponentFixture<InjectionDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectionDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
