import { Injectable } from '@nestjs/common';
import * as randtoken from 'rand-token';
import { LoginDto } from '../../dto/auth/login.dto';
import { CreateUserDTO } from '../../dto/user/createUser.dto';
import { User } from '../../entity/user.entity';
import { UpdateRefreshToken } from '../user/updateRefreshToken.user';
@Injectable()
export class GenerateRefreshToken {
  constructor(private readonly updateRt: UpdateRefreshToken) {}

  async call(userDto: User) {
    const { id } = userDto;
    const refreshToken = randtoken.generate(16);
    const expirydate = new Date();
    expirydate.setDate(expirydate.getDate() + 1);
    await this.updateRt.call(refreshToken, id, expirydate);
    return refreshToken;
  }
}
