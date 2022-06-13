import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../../../../domain/dto/auth/login.dto';
import { CreateUserDTO } from '../../../../domain/dto/user/createUser.dto';
import { LoginUser, RegisterUser } from '../../../../domain/use_cases/auth';
import { JwtAuthGuard } from '../../../../domain/use_cases/auth/guards/jwtAuth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginUser: LoginUser,
    private readonly registerUser: RegisterUser,
  ) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.loginUser.call(loginDto);
  }

  @Post('register')
  register(@Body() userDto: CreateUserDTO) {
    return this.registerUser.call(userDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('refresh')
  refreshToken() {
    return { message: 'Refresh' };
  }
}
