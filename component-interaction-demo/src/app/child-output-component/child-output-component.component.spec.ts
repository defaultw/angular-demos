import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOutputComponentComponent } from './child-output-component.component';

describe('ChildOutputComponentComponent', () => {
  let component: ChildOutputComponentComponent;
  let fixture: ComponentFixture<ChildOutputComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildOutputComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOutputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
