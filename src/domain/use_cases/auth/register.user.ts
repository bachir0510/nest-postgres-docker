import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { CreateUserDTO } from '../../dto/user/createUser.dto';
import { User } from '../../entitys/user.entity';
import { CreateUser } from '../user';

@Injectable()
export class RegisterUser {
  constructor(private readonly createUser: CreateUser) {}

  async call(userDto: CreateUserDTO): Promise<User> {
    const { userName, email, password } = userDto;
    return this.createUser.call(userName, email, password, v4());
  }
}
