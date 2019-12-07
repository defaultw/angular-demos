import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildValueComponentComponent } from './child-value-component.component';

describe('ChildValueComponentComponent', () => {
  let component: ChildValueComponentComponent;
  let fixture: ComponentFixture<ChildValueComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildValueComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildValueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
