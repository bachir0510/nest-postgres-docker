import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entitiy/user.entity';

@Injectable()
export class GetByIdUser {
  constructor(
    @Inject(User.name) private readonly userRepository: Repository<User>,
  ) {}

  async call(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }
}
