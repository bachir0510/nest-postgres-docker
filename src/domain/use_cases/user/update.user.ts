import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UpdateUserDTO } from '../../dto/user/updateUser.dto';
import { User } from '../../entitiy/user.entity';

@Injectable()
export class UpdateUser {
  constructor(
    @Inject(User.name) private readonly userRepository: Repository<User>,
  ) {}

  async call(id: number, userDto: UpdateUserDTO) {
    return this.userRepository.update(id, userDto);
  }
}
