import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CoursesFacade } from "../../application/courses.facade";
import { CreateCourseDto } from "./dto/create-course.dto";
import { CreateCourseCommand } from "../../application/command/create-course.command";
import { UpdateCourseDto } from "./dto/update-course.dto";
import { UpdateCourseCommand } from "../../application/command/update-course.command";

@ApiTags('courses')
@Controller('admin/courses')
export class CoursesController {
    constructor(
        private readonly coursesFacade:CoursesFacade
    ) {
    }
    @Post()
    public create(@Body() createCourseDto:CreateCourseDto){
        return this.coursesFacade.create(createCourseDto);
    }
    @Get()
    public findAll(){
        return this.coursesFacade.findAll();
    }
    @Get(':id')
    public findOne(@Param('id') id:string){
        return this.coursesFacade.findOne(id);
    }
    @Patch(':id')
    public updateOne(@Param('id') id:string, @Body() updateCourseDto:UpdateCourseDto){
        return this.coursesFacade.updateOne(id, updateCourseDto);
    }
}