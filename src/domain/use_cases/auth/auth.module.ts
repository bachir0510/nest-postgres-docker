import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../../strategy/jwt.strategy';
import { UserModule } from '../user/user.module';
import { LoginUser, RegisterUser } from './';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    UserModule,
  ],
  providers: [LoginUser, RegisterUser, JwtStrategy],
  exports: [LoginUser, RegisterUser, JwtStrategy, PassportModule],
})
export class AuthModule {}
