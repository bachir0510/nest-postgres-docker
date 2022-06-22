import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entity/user.entity';

@Injectable()
export class GetByEmail {
  constructor(
    @Inject(User.name) private readonly userRepository: Repository<User>,
  ) {}

  async call(email: string) {
    return await this.userRepository.findOne({ email });
  }
}
