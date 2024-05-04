import {
  Column,
  CreateDateColumn, DeleteDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { User } from "../../users/entity/user.entity";
import { Comment } from "../../comments/entity/comment.entity";

@Entity()
export class Course {

  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  title:string;

  @Column()
  description:string;

  @ManyToMany(type => User, (user)=>user.courses)
  users:User[]

  @OneToMany(type => Comment, (comment)=>comment.course, {cascade:true})
  comments:Comment[]

  @CreateDateColumn()
  createAt:Date;

  @UpdateDateColumn()
  updateAt:Date;

  @DeleteDateColumn()
  deleteAt:Date;
}