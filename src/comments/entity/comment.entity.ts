import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { IsNotEmpty, IsString } from "class-validator";
import { User } from "../../users/entity/user.entity";
import { Course } from "../../courses/entity/course.entity";

@Entity()
export class Comment {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @Column({ nullable: true })
  userId: number;

  @Column({ nullable: true })
  courseId: number;

  @ManyToOne(type => User, (user) => user.comments)
  user: User;

  @ManyToOne(type => Course, (course) => course.comments)
  course: Course;

  @ManyToOne(type => Comment, (comment) => comment.parent)
  parent: Comment;

  @OneToMany(type => Comment, (comment) => comment.children)
  children: Comment[];

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}