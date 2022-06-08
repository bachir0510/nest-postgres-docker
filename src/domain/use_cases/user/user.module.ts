import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { userProvider } from '../../../infrastructure/database/providers/user.provider';
import {
  CreateUser,
  GetUsers,
  GetByIdUser,
  UpdateUser,
  DeleteUser,
  ComparePassword,
} from './';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProvider,
    CreateUser,
    GetUsers,
    GetByIdUser,
    UpdateUser,
    DeleteUser,
    ComparePassword,
  ],
  exports: [
    CreateUser,
    GetUsers,
    GetByIdUser,
    UpdateUser,
    DeleteUser,
    ComparePassword,
  ],
})
export class UserModule {}
