import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entitys/user.entity';

@Injectable()
export class DeleteUser {
  constructor(
    @Inject(User.name) private readonly userRetpository: Repository<User>,
  ) {}

  async call(id: number): Promise<User> {
    const user: User = await this.userRetpository.findOne(id);
    return this.userRetpository.remove(user);
  }
}
