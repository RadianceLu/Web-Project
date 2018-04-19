import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Course } from '../models/course.model.client';

@Injectable()
export class CourseService {

  constructor(private http: Http) { }

  baseUrl = environment.baseUrl;

  createCourse(userId: String, course: Course) {
    const url = this.baseUrl + '/api/user/' + userId + '/course';
    return this.http.post(url, course).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  addCourseForStudent(userId: String, courseId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/course/' + courseId;
    return this.http.put(url, userId).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findCoursesByUser(userId: String) {
    const url = this.baseUrl + '/api/user/' + userId + '/course';
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }
  // findCourseByCourseId(courseId: String) {
  //   const url = this.baseUrl + '/api/course/' + courseId + '/course';
  //   return this.http.get(url).map(
  //     (res: Response) => {
  //       return res.json();
  //     }
  //   );
  // }

  findCourseByName(courseName: String) {
    const url = this.baseUrl + '/api/course/' + courseName;
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findCourseById(courseId: String) {
    const url = this.baseUrl + '/api/course/' + courseId;
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  updateCourse(courseId: String, course: Course) {
    const url = this.baseUrl + '/api/course/' + courseId;
    return this.http.put(url, course).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  deleteCourse(courseId: String) {
    const url = this.baseUrl + '/api/course/' + courseId;
    return this.http.delete(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }
}
