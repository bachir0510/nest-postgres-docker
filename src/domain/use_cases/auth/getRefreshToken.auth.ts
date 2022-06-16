import { Injectable } from '@nestjs/common';
import * as randtoken from 'rand-token';
import { User } from '../../entitys/user.entity';
import { UpdateRefreshToken } from '../user/updateRefreshToken.user';

@Injectable()
export class GetRefreshToken {
  constructor(private readonly updateRt: UpdateRefreshToken) {}

  async call(user: User) {
    const { id } = user;
    const refreshToken = randtoken.generate(16);

    const expirydate = new Date();
    expirydate.setDate(expirydate.getDate() + 16);

    await this.updateRt.call(id, refreshToken, expirydate);
    return refreshToken;
  }
}
