import {
  Body,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '../../dto/auth/login.dto';
import { LoginOutputDto } from '../../dto/auth/LoginOutputDto';
import { JwtPayload } from '../../interfase/jwtPayload.interface';
import { GetByEmail } from '../user';
import { ComparePassword } from '../user/comparePassword.user';
import { GenerateRefreshToken } from './generateRefreshToken.auth';

@Injectable()
export class LoginUser {
  constructor(
    private readonly getByEmail: GetByEmail,
    private readonly checkoutPassword: ComparePassword,
    private readonly generateRt: GenerateRefreshToken,
    private readonly jwt: JwtService,
  ) {}
  async call(@Body() userDto: LoginDto): Promise<LoginOutputDto> {
    const { email, password } = userDto;

    const user = await this.getByEmail.call(email);

    if (user && (await this.checkoutPassword.call(password, user.password))) {
      const payload: JwtPayload = { id: user.id, email: user.email };

      const accessToken = this.jwt.sign(payload);

      const refreshToken = this.generateRt.call(user);

      return { accessToken, refreshToken };
    }
    throw new UnauthorizedException('Please check your credentials');
  }
}
