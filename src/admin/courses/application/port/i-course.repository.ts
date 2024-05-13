import { CourseModel } from "../../domain/course-model";

export abstract class ICourseRepository {
    abstract save(model: CourseModel): Promise<CourseModel>;

    abstract findAll(): Promise<CourseModel[]>;

    abstract findOne(id: string): Promise<CourseModel>;

    abstract updateOne(id: string, course: Partial<CourseModel>):Promise<CourseModel>;

    abstract deleteOne(id:string):Promise<CourseModel>;
}