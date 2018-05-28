import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorExampleComponent } from './instructor-example.component';

describe('InstructorExampleComponent', () => {
  let component: InstructorExampleComponent;
  let fixture: ComponentFixture<InstructorExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
