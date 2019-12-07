import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildViewchildComponentComponent } from './child-viewchild-component.component';

describe('ChildViewchildComponentComponent', () => {
  let component: ChildViewchildComponentComponent;
  let fixture: ComponentFixture<ChildViewchildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildViewchildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildViewchildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
