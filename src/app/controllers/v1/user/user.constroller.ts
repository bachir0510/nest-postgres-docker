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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from '../../../../domain/dto/user/createUser.dto';
import { UpdateUserDTO } from '../../../../domain/dto/user/updateUser.dto';
import { User } from '../../../../domain/entitys/user.entity';
import { JwtAuthGuard } from '../../../../domain/guards/jwtAuth.guard';
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
    private readonly getAllUsers: GetUsers,
    private readonly getByIdUsers: GetByIdUser,
    private readonly updateUser: UpdateUser,
    private readonly deleteUser: DeleteUser,
    private readonly createUser: CreateUser,
  ) {}

  @Post()
  async create(
    userName: string,
    email: string,
    password: string,
    activationToken: string,
  ): Promise<User> {
    return this.createUser.call(userName, email, password, activationToken);
  }

  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth()
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
