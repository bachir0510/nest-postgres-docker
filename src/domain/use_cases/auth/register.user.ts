import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { CreateUserDTO } from '../../dto/user/createUser.dto';
import { UserOutPutDTO } from '../../dto/user/userOutput.dto';
import { CreateUser } from '../user';

@Injectable()
export class RegisterUser {
  constructor(private readonly createUser: CreateUser) {}

  async call(userDto: CreateUserDTO): Promise<UserOutPutDTO> {
    const { userName, email, password } = userDto;
    return this.createUser.call(userName, email, password, v4());
  }
}
