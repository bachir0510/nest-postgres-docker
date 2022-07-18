import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDTO } from '../../dto/user/createUser.dto';
import { UserOutPutDTO } from '../../dto/user/userOutput.dto';
import { User } from '../../entity/user.entity';

@Injectable()
export class CreateUser {
  constructor(
    @Inject(User.name) private readonly userRepository: Repository<User>,
  ) {}

  async call(userDto: CreateUserDTO): Promise<UserOutPutDTO> {
    const { email } = userDto;
    const userExist = await this.userRepository.findOne({
      email,
    });
    if (userExist)
      throw new BadRequestException('User already registerd with email');

    const user = this.userRepository.create(userDto);
    return this.userRepository.save(user);
  }
}
