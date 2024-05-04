import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Comment } from "./entity/comment.entity";
import { Repository } from "typeorm";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository:Repository<Comment>,
  ) {
  }

  public create(createCommentDto:CreateCommentDto){
    const comment = this.commentRepository.create(createCommentDto);
    return this.commentRepository.save(comment);
  }
  public findAll(){
    return this.commentRepository.find();
  }
  public findOne(id:number){
    return this.commentRepository.findOneBy({id});
  }
  public async updateOne(id:number, updateCommentDto:UpdateCommentDto){
    const comment = await this.commentRepository.preload({
      id,
      ...updateCommentDto
    });
    return this.commentRepository.save(comment);
  }

  public async deleteOne(id:number){
    const comment = await this.findOne(id);
    return this.commentRepository.delete(comment);
  }
}