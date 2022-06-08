import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LoginDto } from '../../dto/auth/login.dto';
import { User } from '../../entitys/user.entity';
import { GetByIdStudent } from '../student';

@Injectable()
export class LoginUser {
  constructor(private readonly findById: GetByIdStudent) {}

  async call(loginDto: LoginDto): Promise<LoginDto> {
    return;
  }
}
