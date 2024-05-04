import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateCourseDto } from "./dto/create-course.dto";
import { UpdateCourseDto } from "./dto/update-course.dto";
import { CoursesService } from "./courses.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
@ApiTags('courses')
@ApiBearerAuth()
@Controller('courses')
export class CoursesController {
  constructor(
    private readonly coursesService:CoursesService,
  ) {
  }
  @Post()
  public create(@Body() createCourseDto:CreateCourseDto){
    return this.coursesService.create(createCourseDto);
  }
  @Get()
  public findAll(){
    return this.coursesService.findAll();
  }
  @Get(':id')
  public findOne(@Param(ParseIntPipe) id:number){
    return this.coursesService.findOne(id);
  }
  @Patch(':id')
  public updateOne(@Param(ParseIntPipe) id:number, @Body() updateCourseDto:UpdateCourseDto){
    return this.coursesService.updateOne(id, updateCourseDto);
  }
  @Delete(':id')
  public async deleteOne(@Param(ParseIntPipe) id:number){
    return this.coursesService.deleteOne(id);
  }
}