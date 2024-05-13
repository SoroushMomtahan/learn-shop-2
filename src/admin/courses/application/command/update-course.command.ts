import { PartialType } from "@nestjs/mapped-types";
import { CreateCourseCommand } from "./create-course.command";

export class UpdateCourseCommand extends PartialType(CreateCourseCommand){

}