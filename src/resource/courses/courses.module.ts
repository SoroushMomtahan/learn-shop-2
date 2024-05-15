import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseEntity } from "../common/entity/course.entity";

@Module({
  imports:[TypeOrmModule.forFeature([CourseEntity])],
  providers: [CoursesService],
  exports:[CoursesService]
})
export class CoursesModule {}
