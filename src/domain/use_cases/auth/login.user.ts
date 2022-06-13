import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../../dto/auth/login.dto';
import { LoginOutputDto } from '../../dto/auth/LoginOutputDto';
import { JwtPayload } from '../../interface/jwtPayload.interface';
import { ComparePassword, GetByEmail } from '../user';

@Injectable()
export class LoginUser {
  constructor(
    private readonly getByEmail: GetByEmail,
    private readonly checkPassword: ComparePassword,
    private readonly jwtService: JwtService,
  ) {}

  async call(loginDto: LoginDto): Promise<LoginOutputDto> {
    const { email } = loginDto;
    const user = await this.getByEmail.call(email);
    if (
      user &&
      (await this.checkPassword.call(loginDto.password, user.password))
    ) {
      const paylaod: JwtPayload = { id: user.id, email, active: user.active };
      const token = this.jwtService.sign(paylaod);
      return { token };
    }
    throw new UnauthorizedException('Please check your password');
  }
}
