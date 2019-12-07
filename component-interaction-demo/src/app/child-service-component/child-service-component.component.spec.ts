import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildServiceComponentComponent } from './child-service-component.component';

describe('ChildServiceComponentComponent', () => {
  let component: ChildServiceComponentComponent;
  let fixture: ComponentFixture<ChildServiceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildServiceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildServiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
