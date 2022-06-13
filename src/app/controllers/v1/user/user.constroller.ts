import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdateUserDTO } from '../../../../domain/dto/user/updateUser.dto';
import { User } from '../../../../domain/entitys/user.entity';
import { JwtAuthGuard } from '../../../../domain/use_cases/auth/guards/jwtAuth.guard';
import {
  GetByIdUser,
  GetUsers,
  UpdateUser,
  DeleteUser,
} from '../../../../domain/use_cases/user';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly getAllUsers: GetUsers,
    private readonly getByIdUsers: GetByIdUser,
    private readonly updateUser: UpdateUser,
    private readonly deleteUser: DeleteUser,
  ) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  async getAll(): Promise<User[]> {
    return this.getAllUsers.call();
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  async getOne(@Param('id') id: number): Promise<User> {
    return this.getByIdUsers.call(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Put(':id')
  async update(@Param('id') id: number, @Body() userDto: UpdateUserDTO) {
    return this.updateUser.call(id, userDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  async delelte(@Param('id') id: number): Promise<User> {
    return this.deleteUser.call(id);
  }
}
