import { Body, Controller, Param, ParseIntPipe, Post } from "@nestjs/common";
import { HashingService } from "./abstract/hashing.service";
import { CompareHashDto } from "../dto/compare-hash.dto";

@Controller('hashing')
export class HashingController {
  constructor(
    private readonly hashingService:HashingService
  ) {
  }
  @Post('hash')
  public hash(@Body('password') password:string){
    return this.hashingService.hash(password);
  }
  @Post('compare')
  public compare(@Body() compareHashDto:CompareHashDto){
    const {password, hashedPassword} = compareHashDto;
    return this.hashingService.compare(password, hashedPassword);
  }
}