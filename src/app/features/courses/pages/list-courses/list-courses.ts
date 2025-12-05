import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../../../core/services/course.service';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-courses.html',
  styleUrls: ['./list-courses.css']
})
export class CoursesListComponent implements OnInit {
  courses: any[] = [];
  loading = false;
  error = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.courseService.getCourses().subscribe({
      next: data => { this.courses = data; this.loading = false; },
      error: err => { this.error = 'Error al cargar cursos'; this.loading = false; }
    });
  }
}
