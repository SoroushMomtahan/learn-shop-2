import { CourseEntity } from "../../../../../../common/entity/course.entity";
import { CourseModel } from "../../../../domain/course-model";
import { UserMapper } from "../../../../../users/infrastructure/persistence/adapter/mapper/user.mapper";

export class CourseMapper {
    static toDomain(courseEntity: CourseEntity): CourseModel {
        const model = new CourseModel(courseEntity);
        model.dateConvertor("fa-IR");
        return model;
    }

    static toPersistence(courseModel: CourseModel) {
        const entity = new CourseEntity();
        entity.id = courseModel.id;
        entity.title = courseModel.title;
        entity.description = courseModel.description;
        entity.price = courseModel.price;
        entity.createAt = courseModel.createAt;
        entity.updateAt = courseModel.updateAt;
        entity.deleteAt = courseModel.deleteAt;
        // entity.userIds = ['hello'];
        return entity;
    }
}