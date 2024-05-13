import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoursesModule } from "../courses.module";
import { ICourseRepository } from "../application/port/i-course.repository";
import { CourseService } from "./persistence/adapter/course.service";
import { CourseEntity } from "../../../common/entity/course.entity";
import { ResourceModule } from "../../../resource/resource.module";
import { UsersService } from "../../../resource/users/users.service";

@Module({
    imports:[ResourceModule, TypeOrmModule.forFeature([CourseEntity])],
    providers:[
        {
            provide:ICourseRepository,
            useClass:CourseService
        },
    ],
    exports:[ICourseRepository]
})
export class CoursesInfrastructureModule {
}