import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../entitys/user.entity';
import { JwtPayload } from '../interface/jwtPayload.interface';
import { GetByEmail } from '../use_cases/user';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt') {
  constructor(private readonly getByEmail: GetByEmail) {
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
