import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayblogComponent } from './displayblog.component';

describe('DisplayblogComponent', () => {
  let component: DisplayblogComponent;
  let fixture: ComponentFixture<DisplayblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
