import { CourseModel } from "../course-model";
import { Injectable } from "@nestjs/common";
@Injectable()
export class CourseFactory {
    public create(course: Partial<CourseModel>) {
        course.id = crypto.randomUUID();
        course.createAt = new Date(Date.now());
        course.updateAt = new Date(Date.now());
        course.deleteAt = null;
        return new CourseModel(course);
    }

    public update(course: Partial<CourseModel>) {
        course.updateAt = new Date(Date.now());
        return new CourseModel(course);
    }


}