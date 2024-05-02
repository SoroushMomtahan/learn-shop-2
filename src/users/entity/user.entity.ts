import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { RoleEnum } from "../enum/role.enum";

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

  @CreateDateColumn()
  createAt:Date;

  @UpdateDateColumn()
  updateAt:Date;

  @DeleteDateColumn()
  deleteAt:Date;
}