import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { userProvider } from '../../../infrastructure/database/providers/user.provider';
import { JwtStrategy } from '../../strategy/jwt.strategy';
import { JwtRefreshStrategy } from '../../strategy/jwtRefreshTokenStrategy.strategy';
import { UserModule } from '../user/user.module';
import {
  RegisterUser,
  LoginUser,
  GetRefreshToken,
  AccessToken,
  ValidatePassord,
} from './';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    DatabaseModule,
    UserModule,
  ],
  providers: [
    ...userProvider,
    LoginUser,
    RegisterUser,
    GetRefreshToken,

    AccessToken,
    ValidatePassord,

    JwtStrategy,
    JwtRefreshStrategy,
  ],
  exports: [
    LoginUser,
    RegisterUser,
    GetRefreshToken,

    AccessToken,
    ValidatePassord,

    JwtStrategy,
    JwtRefreshStrategy,
    PassportModule,
  ],
})
export class AuthModule {}
