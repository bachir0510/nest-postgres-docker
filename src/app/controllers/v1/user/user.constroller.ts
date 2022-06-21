import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateUserDTO } from '../../../../domain/dto/user/updateUser.dto';
import { UserOutPutDTO } from '../../../../domain/dto/user/userOutput.dto';
import { User } from '../../../../domain/entitiy/user.entity';
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

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  @ApiOperation({
    description: 'Return all user',
  })
  async getAll(): Promise<User[]> {
    return this.getAllUsers.call();
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({
    description: 'Return user by id',
  })
  async getOne(@Param('id') id: number): Promise<User> {
    return this.getByIdUsers.call(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Put(':id')
  @ApiOperation({
    description: 'Update user by id',
  })
  async update(@Param('id') id: number, @Body() userDto: UpdateUserDTO) {
    return this.updateUser.call(id, userDto);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({
    description: 'Delete user by id',
  })
  async delelte(@Param('id') id: number): Promise<UserOutPutDTO> {
    return this.deleteUser.call(id);
  }
}
