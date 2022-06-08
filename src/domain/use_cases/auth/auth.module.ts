import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { LoginUser, RegisterUser } from './';

@Module({
  imports: [UserModule],
  providers: [LoginUser, RegisterUser],
  exports: [LoginUser, RegisterUser],
})
export class AuthModule {}
