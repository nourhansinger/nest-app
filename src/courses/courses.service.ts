import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';


@Injectable()
export class CoursesService {
  
  private courses = [
    {name: 'Mathematics', grade: 90, studentIds: [1, 2]},
    {name: 'Physics', grade: 85, studentIds: [1, 3]},
    {name: 'Chemistry', grade: 92, studentIds: [2, 3]},
  ];

  create(createCourseDto: CreateCourseDto) {
    const newCourse = {
      name: createCourseDto.name,
      grade: createCourseDto.grade, 
      studentIds: createCourseDto.studentIds,
  }
    this.courses.push(newCourse);
    return 'Course created successfully';
  }

  findAll() {
    return this.courses
  }

  findOne(id: number) {
     const course = this.courses[id];
     if (!course) {
      return `Course with id ${id} not found`;
     }
     return course;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = this.courses[id];
    if (!course) {
      return `Course with id ${id} not found`;
    }
    Object.assign(course, updateCourseDto);
    return course;
  }

  remove(id: number) {
    const course = this.courses[id];
    if (!course) {
      return `Course with id ${id} not found`;
    }
    this.courses.splice(id, 1);
    return `Course with id ${id} deleted successfully`;
  }
}
