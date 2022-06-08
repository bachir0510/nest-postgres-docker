import { Controller, Post } from '@nestjs/common';
import { LoginUser, RegisterUser } from '../../../../domain/use_cases/auth';

@Controller('auth')
export class AuthController {
  constructor( private readonly loginUser: LoginUser,
    private readonly registerUser: RegisterUser) {}

  @Post('login')
  login() {
    return this.loginUser.call();
  }

  @Post('register')
  register() {
    return this.registerUser.call();
  }
}
