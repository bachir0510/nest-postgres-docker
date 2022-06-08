import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../../dto/user/createUser.dto';
import { CreateUser } from '../user';

@Injectable()
export class RegisterUser {
  constructor(private readonly createUser: CreateUser) {}

  async call(userDto: CreateUserDTO) {
    return this.createUser.call(userDto);
  }
}
