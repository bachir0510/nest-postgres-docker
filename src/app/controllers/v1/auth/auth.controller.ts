import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginDto } from '../../../../domain/dto/auth/login.dto';
import { CreateUserDTO } from '../../../../domain/dto/user/createUser.dto';
import { LoginUser, RegisterUser } from '../../../../domain/use_cases/auth';
import { LocalAuthGuard } from '../../../../domain/use_cases/auth/guards/jwtAuth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginUser: LoginUser,
    private readonly registerUser: RegisterUser,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<{token: string}> {
    return this.loginUser.call(loginDto);
  }

  @Post('register')
  register(@Body() userDto: CreateUserDTO) {
    return this.registerUser.call(userDto);
  }
}
