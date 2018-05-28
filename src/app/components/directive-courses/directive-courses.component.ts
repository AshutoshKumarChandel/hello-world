import { Component } from '@angular/core';

@Component({
  selector: 'directive-courses',
  templateUrl: './directive-courses.component.html',
  styleUrls: ['./directive-courses.component.css']
})
export class DirectiveCoursesComponent {
  courses = ['angular', 'webApi', 'c#', 'java', 'sql'];
}
