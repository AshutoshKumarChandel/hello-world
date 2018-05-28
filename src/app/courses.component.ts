
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html'
})

export class CoursesComponent {

    private _title: string;
    private _courses: string[];
    isActive = true;
    email = 'me@example.com';

    constructor(service: CoursesService) {
        this._courses = service.getCourses();
        this._title = 'Angular Courses';
    }

    getTitle() {
        return this._title;
    }

    getCourses() {
        return this._courses;
    }

    onKeyUp() {
        console.log(this.email);
    }
}