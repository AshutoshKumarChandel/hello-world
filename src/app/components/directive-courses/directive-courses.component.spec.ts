import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveCoursesComponent } from './directive-courses.component';

describe('DirectiveCoursesComponent', () => {
  let component: DirectiveCoursesComponent;
  let fixture: ComponentFixture<DirectiveCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
