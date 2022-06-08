import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from '../../../../domain/dto/user/createUser.dto';
import { UpdateUserDTO } from '../../../../domain/dto/user/updateUser.dto';
import { User } from '../../../../domain/entitys/user.entity';
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

  @Post()
  async create(@Body() userDto: CreateUserDTO): Promise<User> {
    return this.createUser.call(userDto);
  }

  @Get()
  async getAll(): Promise<User[]> {
    return this.getAllUsers.call();
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<User> {
    return this.getByIdUsers.call(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() userDto: UpdateUserDTO) {
    return this.updateUser.call(id, userDto);
  }

  @Delete(':id')
  async delelte(@Param('id') id: number): Promise<User> {
    return this.deleteUser.call(id);
  }
}
