import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { HashingService } from "../iam/hashing/abstract/hashing.service";
import { FindUserDto } from "./dto/find-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly hashingService: HashingService
  ) {
  }

  public async createOne(createUserDto: CreateUserDto) {
    const { password, ...others } = createUserDto;

    const hashedPassword = await this.hashingService.hash(password);

    const user = this.userRepository.create({
      password: hashedPassword,
      ...others
    });
    return this.userRepository.save(user);
  }

  public async updateOne(updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      ...updateUserDto
    });
    return this.userRepository.save(user);
  }

  public findOne(id: number) {
    return this.userRepository.findOneBy({ id });
  }
  public findOneBy(findUserDto?:FindUserDto){
    return this.userRepository.findOneBy({
      ...findUserDto
    });
    // return this.userRepository.findOne({
    //   where: {
    //     ...findUserDto
    //   },
    //   select:['password', 'username']
    // })
  }
  public findAll(findUserDto?:FindUserDto) {
    return this.userRepository.findBy({
      ...findUserDto
    });
  }

  public async removeOne(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    return this.userRepository.delete(user);
  }
}