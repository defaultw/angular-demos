import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInputComponentComponent } from './child-input-component.component';

describe('ChildInputComponentComponent', () => {
  let component: ChildInputComponentComponent;
  let fixture: ComponentFixture<ChildInputComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildInputComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
