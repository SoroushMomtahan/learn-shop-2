import {
    Column,
    Entity,
    ManyToMany,
    RelationId
} from "typeorm";
import { UserEntity } from "./user.entity";
import { BaseEntity } from "./base.entity";


@Entity("courses")
export class CourseEntity extends BaseEntity {
    @Column({ unique: true })
    title: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @RelationId((courseEntity: CourseEntity) => courseEntity.users)
    userIds: string[];

    @ManyToMany(type => UserEntity, (userEntity) => userEntity.courses)
    users: UserEntity[];
}