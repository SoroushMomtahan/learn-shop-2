import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Course } from "./entity/course.entity";
import { Repository } from "typeorm";
import { CreateCourseDto } from "./dto/create-course.dto";
import { UpdateCourseDto } from "./dto/update-course.dto";

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository:Repository<Course>,
  ) {
  }

  public create(createCourseDto:CreateCourseDto){
    const course = this.courseRepository.create(createCourseDto);
    return this.courseRepository.save(course);
  }
  public findAll(){
    return this.courseRepository.find();
  }
  public findOne(id:number){
    return this.courseRepository.findOneBy({id});
  }
  public async updateOne(id:number, updateCourseDto:UpdateCourseDto){
    const course = await this.courseRepository.preload({
      id,
      ...updateCourseDto
    });
    return this.courseRepository.save(course);
  }
  public async deleteOne(id:number){
    const course = await this.findOne(id);
    return this.courseRepository.delete(course);
  }
}