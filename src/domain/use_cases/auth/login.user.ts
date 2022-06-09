import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from '../../dto/auth/login.dto';
import { ComparePassword, GetByEmail } from '../user';

@Injectable()
export class LoginUser {
  constructor(
    private readonly getByEmail: GetByEmail,
    private readonly checkPassword: ComparePassword,
  ) {}

  async call(loginDto: LoginDto): Promise<string> {
    const user = await this.getByEmail.call(loginDto.email);
    if (
      user &&
      (await this.checkPassword.call(loginDto.password, user.password))
    ) {
      return 'jwt';
    }
    throw new UnauthorizedException("Please chck your password")
  }
}
