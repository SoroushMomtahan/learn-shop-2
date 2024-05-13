import { Injectable } from "@nestjs/common";
import { ICourseRepository } from "./port/i-course.repository";
import { CreateCourseCommand } from "./command/create-course.command";
import { CourseModel } from "../domain/course-model";
import { UpdateCourseCommand } from "./command/update-course.command";
import { CourseFactory } from "../domain/factory/course-factory";

@Injectable()
export class CoursesFacade {
    constructor(
        private readonly courseRepository: ICourseRepository,
        private readonly courseFactory:CourseFactory
    ) {
    }

    public create(createCourseCommand: CreateCourseCommand) {
        const model = this.courseFactory.create(createCourseCommand);
        return this.courseRepository.save(model);
    }

    public findAll() {
        return this.courseRepository.findAll();
    }

    public findOne(id: string) {
        return this.courseRepository.findOne(id);
    }

    public updateOne(id:string, updateCourseCommand:UpdateCourseCommand) {
        const model = this.courseFactory.update(updateCourseCommand);
        return this.courseRepository.updateOne(id, model);
    }

    public deleteOne() {

    }
}