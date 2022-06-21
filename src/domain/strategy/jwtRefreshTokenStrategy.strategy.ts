import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../entitiy/user.entity';
import { JwtPayload } from '../interface/jwtPayload.interface';
import { LoginUser } from '../use_cases/auth';
import { GetByEmail } from '../use_cases/user';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-token',
) {
  constructor(
    private readonly getByEmail: GetByEmail,
    private login: LoginUser,
  ) {
    super({
      secretOrKey: 'secret',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(paylaod: JwtPayload): Promise<User> {
    const user = this.getByEmail.call(paylaod.email);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
