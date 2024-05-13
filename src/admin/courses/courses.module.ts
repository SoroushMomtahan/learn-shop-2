import { Module } from "@nestjs/common";
import { CoursesInfrastructureModule } from "./infrastracture/courses-infrastructure.module";
import { CourseFactory } from "./domain/factory/course-factory";
import { CoursesFacade } from "./application/courses.facade";
import { CoursesController } from "./presenter/http/courses.controller";

@Module({
    imports:[CoursesInfrastructureModule],
    controllers:[
      CoursesController
    ],
    providers:[
        CourseFactory,
        CoursesFacade
    ],
})
export class CoursesModule {
}