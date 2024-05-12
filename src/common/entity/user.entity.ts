import {
  AfterLoad,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity, JoinTable,
  ManyToMany, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { BaseEntity } from "./base.entity";
import { RoleEnum } from "../enum/role.enum";

@Entity('users')
export class UserEntity extends BaseEntity{

  @Column({
    nullable:true
  })
  firstname:string;

  @Column({
    nullable:true
  })
  lastname:string;

  @Column({
    unique:true
  })
  username:string;

  @Column({
    unique:true
  })
  email:string;

  @Column({
    unique:true
  })
  mobile:string;

  @Column()
  password:string;

  @Column({default:true})
  status:boolean;

  @Column({default:RoleEnum.USER})
  role:RoleEnum;

  // @ManyToMany(type => CourseEntity, (course)=>course.users)
  // @JoinTable()
  // courses:CourseEntity[]


}