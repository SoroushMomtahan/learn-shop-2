// import {
//   Column,
//   Entity,
//   ManyToMany,
//   RelationId,
// } from "typeorm";
// import { UserEntity } from "./user.entity";
// import { BaseEntity } from "./base.entity";
//
//
// @Entity("courses")
// export class CourseEntity extends BaseEntity{
//   @Column({ unique: true })
//   title: string;
//
//   @Column()
//   description: string;
//
//   @Column({ default: 0 })
//   price: number;
//
//   @RelationId((courseEntity: CourseEntity) => courseEntity.users)
//   userIds: number[];
//
//   @ManyToMany(type => UserEntity, (userEntity) => userEntity.courses)
//   users: UserEntity[];
// }