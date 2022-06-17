import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../../dto/auth/login.dto';
import { LoginOutputDto } from '../../dto/auth/loginOutputDto';
import { JwtPayload } from '../../interface/jwtPayload.interface';
import { ComparePassword, GetByEmail } from '../user';
import { GetRefreshToken } from './getRefreshToken.auth';

@Injectable()
export class LoginUser {
  constructor(
    private readonly getByEmail: GetByEmail,
    private readonly checkPassword: ComparePassword,
    private readonly getRefreshToken: GetRefreshToken,
    private readonly jwtService:JwtService
  ) {}

  async call(loginDto: LoginDto): Promise<LoginOutputDto> {
    const { email } = loginDto;
    const user = await this.getByEmail.call(email);
    if (
      user &&
      (await this.checkPassword.call(loginDto.password, user.password))
    ) {
      const paylaod: JwtPayload = { id: user.id, email, active: user.active };
      const accessToken = this.jwtService.sign(paylaod);
      const refreshToken = this.getRefreshToken.call(user)

      return { 
        accessToken,
        refreshToken
      };
    }
    throw new UnauthorizedException('Please check your password');
  }
}
