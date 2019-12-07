import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSetComponentComponent } from './child-set-component.component';

describe('ChildSetComponentComponent', () => {
  let component: ChildSetComponentComponent;
  let fixture: ComponentFixture<ChildSetComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildSetComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildSetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
