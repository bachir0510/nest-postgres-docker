import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UpdateUserDTO } from '../../../../domain/dto/user/updateUser.dto';
import { User } from '../../../../domain/entitys/user.entity';
import { JwtAuthGuard } from '../../../../domain/use_cases/auth/guards/jwtAuth.guard';
import {
  CreateUser,
  GetByIdUser,
  GetUsers,
  UpdateUser,
  DeleteUser,
} from '../../../../domain/use_cases/user';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUser: CreateUser,
    private readonly getAllUsers: GetUsers,
    private readonly getByIdUsers: GetByIdUser,
    private readonly updateUser: UpdateUser,
    private readonly deleteUser: DeleteUser,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(): Promise<User[]> {
    return this.getAllUsers.call();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOne(@Param('id') id: number): Promise<User> {
    return this.getByIdUsers.call(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() userDto: UpdateUserDTO) {
    return this.updateUser.call(id, userDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delelte(@Param('id') id: number): Promise<User> {
    return this.deleteUser.call(id);
  }
}
