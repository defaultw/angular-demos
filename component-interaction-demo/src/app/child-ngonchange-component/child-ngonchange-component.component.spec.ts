import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgonchangeComponentComponent } from './child-ngonchange-component.component';

describe('ChildNgonchangeComponentComponent', () => {
  let component: ChildNgonchangeComponentComponent;
  let fixture: ComponentFixture<ChildNgonchangeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildNgonchangeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNgonchangeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
