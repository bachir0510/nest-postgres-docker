import { Body, Controller, Post, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../../../../domain/dto/auth/login.dto';
import { CreateUserDTO } from '../../../../domain/dto/user/createUser.dto';
import { User } from '../../../../domain/entitiy/user.entity';
import { LoginUser, RegisterUser } from '../../../../domain/use_cases/auth';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginUser: LoginUser,
    private readonly registerUser: RegisterUser,
  ) {}

  @Post('login')
  @ApiOperation({
    description: 'Login user',
  })
  async login(
    @Body() loginDto: LoginDto,
  ): Promise<{ accessToken: string; refreshToken: string }> {
    return this.loginUser.call(loginDto);
  }

  @Post('register')
  @ApiOperation({
    description: 'Register user',
  })
  async register(@Body() userDto: CreateUserDTO) {
    return this.registerUser.call(userDto);
  }

  // @Get('logout')
  // @ApiOperation({
  //   description: 'Logout user',
  // })
  // logout(@GetUser() user: User){
  //   this.logoutUser.call(user)
  // }

  @Post('refreshToken')
  @ApiOperation({
    description: 'Refresh token',
  })
  async refreshToken(@Req() user: User) {
    return this.loginUser.call(user);
  }
}
