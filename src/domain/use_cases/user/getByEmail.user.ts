import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entitys/user.entity';

@Injectable()
export class GetByEmail {
  constructor(
    @Inject(User.name) private readonly userRepository: Repository<User>,
  ) {}

  async call(email: string): Promise<User> {
    return await this.userRepository.findOne({email});
  }
}