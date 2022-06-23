import { Body, Controller, Post, Req } from '@nestjs/common';
import { LoginDto } from '../../../../domain/dto/auth/login.dto';
import { LoginOutputDto } from '../../../../domain/dto/auth/LoginOutputDto';
import { CreateUserDTO } from '../../../../domain/dto/user/createUser.dto';
import { UserOutPutDTO } from '../../../../domain/dto/user/userOutput.dto';
import { RegisterUser, LoginUser } from '../../../../domain/use_cases/auth';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUser: RegisterUser,
    private readonly loginUser: LoginUser,
  ) {}

  @Post('register')
  async register(@Body() userDto: CreateUserDTO): Promise<UserOutPutDTO> {
    return this.registerUser.call(userDto);
  }

  @Post('login')
  async login(@Body() userDto: LoginDto) {
    return this.loginUser.call(userDto);
  }

  @Post('refresh')
  async refresh(@Req() userDto: LoginDto) {
    return this.loginUser.call(userDto);
  }
}
