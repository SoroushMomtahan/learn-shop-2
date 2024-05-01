import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id:number;

  @Column({
    unique:true
  })
  firstname:string;

  @Column({
    unique:true
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
  mobile:number;

  @Column()
  password:string;

  @Column()
  status:boolean;

  @Column({default:RoleEnum.USER})
  role:string;

  @CreateDateColumn()
  createAt:Date;

  @UpdateDateColumn()
  updateAt:Date;

  @DeleteDateColumn()
  deleteAt:Date;
}