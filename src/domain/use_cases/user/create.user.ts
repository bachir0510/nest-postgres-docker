import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entitys/user.entity';

@Injectable()
export class CreateUser {
  constructor(
    @Inject(User.name) private readonly userRepository: Repository<User>,
  ) {}

  async call(
    userName: string,
    email: string,
    password: string,
    activationToken: string,
  ): Promise<User> {
    const userExist = await this.userRepository.findOne({
      email,
    });
    if (userExist)
      throw new BadRequestException('User already registerd with email');

    const user = this.userRepository.create({
      userName,
      email,
      password,
      activationToken,
    });
    return this.userRepository.save(user);
  }
}
