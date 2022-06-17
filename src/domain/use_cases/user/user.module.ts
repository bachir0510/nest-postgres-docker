import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { userProvider } from '../../../infrastructure/database/providers/user.provider';
import {
  CreateUser,
  GetUsers,
  GetByIdUser,
  GetByEmail,
  UpdateUser,
  DeleteUser,
  ComparePassword,
  UpdateRefreshToken
} from './';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userProvider,
    CreateUser,
    GetUsers,
    GetByIdUser,
    GetByEmail,
    UpdateUser,
    DeleteUser,
    ComparePassword,
    UpdateRefreshToken
  ],
  exports: [
    CreateUser,
    GetUsers,
    GetByIdUser,
    GetByEmail,
    UpdateUser,
    DeleteUser,
    ComparePassword,
    UpdateRefreshToken
  ],
})
export class UserModule {}
