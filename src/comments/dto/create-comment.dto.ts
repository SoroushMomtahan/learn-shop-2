import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCommentDto {

  @IsString()
  @IsNotEmpty()
  body:string;

  @IsInt()
  @IsNotEmpty()
  courseId:number;

  @IsInt()
  @IsNotEmpty()
  userId:number;
}