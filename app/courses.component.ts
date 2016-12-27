import { Component, OnInit, Directive, Input } from '@angular/core';
import { CourseService } from './course.service';
import { AutoGrowDirective } from './auto-grow.directive';


@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
    {{title}}
    <input type="text" autogrow>
    <ul>
    <li *ngFor="let course of courses">
    {{course}}
    </li>
    </ul>
    `,
    providers: [CourseService]
})
export class CoursesComponent implements OnInit {
    title = "This is the title for courses Component";
    courses: string[];
    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }


    ngOnInit() { }
}