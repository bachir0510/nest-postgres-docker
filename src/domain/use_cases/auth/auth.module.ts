import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { LoginUser, RegisterUser } from './';

@Module({
  imports: [PassportModule, UserModule],
  providers: [LoginUser, RegisterUser],
  exports: [LoginUser, RegisterUser],
})
export class AuthModule {}
