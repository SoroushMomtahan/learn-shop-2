import { PartialType } from "@nestjs/swagger";
import { CreateCourseDto } from "./create-course.dto";
import { CreateCommentDto } from "../../comments/dto/create-comment.dto";
import { IsString } from "class-validator";

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @IsString()
  comment:CreateCommentDto
}