import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course.model';
import { Observable } from 'rxjs';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${API}/cursos`);
  }

  getCourse(id: number) {
    return this.http.get<Course>(`${API}/cursos/${id}`);
  }

  createCourse(c: Partial<Course>) {
    return this.http.post<Course>(`${API}/cursos`, c);
  }

  updateCourse(id: number, c: Partial<Course>) {
    return this.http.put<Course>(`${API}/cursos/${id}`, c);
  }

  deleteCourse(id: number) {
    return this.http.delete(`${API}/cursos/${id}`);
  }
}
