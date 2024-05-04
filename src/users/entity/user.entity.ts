import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity, JoinTable,
  ManyToMany, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { RoleEnum } from "../enum/role.enum";
import { Course } from "../../courses/entity/course.entity";
import { Comment } from "../../comments/entity/comment.entity";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id:number;

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

  @ManyToMany(type => Course, (course)=>course.users)
  @JoinTable()
  courses:Course[]

  @OneToMany(type => Comment, (comment)=>comment.user)
  comments:Comment[]

  @CreateDateColumn()
  createAt:Date;

  @UpdateDateColumn()
  updateAt:Date;

  @DeleteDateColumn()
  deleteAt:Date;
}