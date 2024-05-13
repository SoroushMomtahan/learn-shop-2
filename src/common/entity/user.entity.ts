import {
    AfterLoad,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, JoinTable,
    ManyToMany, OneToMany,
    PrimaryGeneratedColumn, RelationId,
    UpdateDateColumn
} from "typeorm";
import { BaseEntity } from "./base.entity";
import { RoleEnum } from "../enum/role.enum";
import { CourseEntity } from "./course.entity";

@Entity("users")
export class UserEntity extends BaseEntity {

    @Column({
        nullable: true
    })
    firstname: string;

    @Column({
        nullable: true
    })
    lastname: string;

    @Column({
        unique: true
    })
    username: string;

    @Column({
        unique: true
    })
    email: string;

    @Column({
        unique: true
    })
    mobile: string;

    @Column()
    password: string;

    @Column({ default: true })
    status: boolean;

    @Column({ default: RoleEnum.USER })
    role: RoleEnum;

    @RelationId((userEntity: UserEntity) => userEntity.courses)
    courseIds: string[];

    @ManyToMany(type => CourseEntity, (course) => course.users)
    @JoinTable()
    courses: CourseEntity[];


}