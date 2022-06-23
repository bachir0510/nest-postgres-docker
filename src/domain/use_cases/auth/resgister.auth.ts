import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../../dto/user/createUser.dto';
import { UserOutPutDTO } from '../../dto/user/userOutput.dto';
import { CreateUser } from '../user';

@Injectable()
export class RegisterUser {
  constructor(private readonly createUser: CreateUser) {}

  async call(userDto: CreateUserDTO): Promise<UserOutPutDTO> {
    return this.createUser.call(userDto);
  }
}
