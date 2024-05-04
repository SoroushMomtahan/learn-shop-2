import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { CommentsService } from "./comments.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
@ApiTags('comments')
@ApiBearerAuth()
@Controller("comments")
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService
  ) {
  }

  @Post()
  public create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  public findAll() {
    return this.commentsService.findAll();
  }

  @Get(":id")
  public findOne(@Param(ParseIntPipe) id: number) {
    return this.commentsService.findOne(id);
  }

  @Patch(":id")
  public updateOne(@Param(ParseIntPipe) id: number, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.updateOne(id, updateCommentDto);
  }

  @Delete(":id")
  public deleteOne(@Param() id: number) {
    return this.commentsService.deleteOne(id);
  }
}