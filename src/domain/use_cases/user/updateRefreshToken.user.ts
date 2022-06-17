 import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entitys/user.entity';

@Injectable()
export class UpdateRefreshToken {
  constructor(
    @Inject(User.name) private readonly userRepository: Repository<User>,
  ) {}

  async call(refreshToken: string, id: string, refreshtokenexpires) {
    await this.userRepository.update(id, {
      refreshtoken: refreshToken,
      refreshtokenexpires
    });
  }
}
