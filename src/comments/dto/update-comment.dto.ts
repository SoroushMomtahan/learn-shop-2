import { IsOptional, IsString } from "class-validator";
import { PartialType } from "@nestjs/swagger";
import { CreateCommentDto } from "./create-comment.dto";

export class UpdateCommentDto extends PartialType(CreateCommentDto){
}