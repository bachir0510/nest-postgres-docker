import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from '../../../../domain/dto/user/createUser.dto';
import { UpdateUserDTO } from '../../../../domain/dto/user/updateUser.dto';
import { UserOutPutDTO } from '../../../../domain/dto/user/userOutput.dto';
import { User } from '../../../../domain/entity/user.entity';

import {
  GetByIdUser,
  GetUsers,
  UpdateUser,
  DeleteUser,
  CreateUser,
} from '../../../../domain/use_cases/user';

@ApiTags('user')
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
  async create(@Body() dto: CreateUserDTO): Promise<UserOutPutDTO> {
    return this.createUser.call(dto);
  }

  @Get()
  @ApiOperation({
    description: 'Return all user',
  })
  async getAll(): Promise<User[]> {
    return this.getAllUsers.call();
  }

  @Get(':id')
  @ApiOperation({
    description: 'Return user by id',
  })
  async getOne(@Param('id') id: number): Promise<User> {
    return this.getByIdUsers.call(id);
  }

  @Put(':id')
  @ApiOperation({
    description: 'Update user by id',
  })
  async update(@Param('id') id: number, @Body() userDto: UpdateUserDTO) {
    return this.updateUser.call(id, userDto);
  }

  @Delete(':id')
  @ApiOperation({
    description: 'Delete user by id',
  })
  async delelte(@Param('id') id: number): Promise<UserOutPutDTO> {
    return this.deleteUser.call(id);
  }
}
