import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { CoursesModule } from './courses/courses.module';

@Module({
    imports:[UsersModule, CoursesModule],
    exports:[UsersModule, CoursesModule]
})
export class ResourceModule {
}