import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id:string;

  @CreateDateColumn()
  createAt:Date;

  @UpdateDateColumn()
  updateAt:Date;

  @DeleteDateColumn()
  deleteAt:Date;
}