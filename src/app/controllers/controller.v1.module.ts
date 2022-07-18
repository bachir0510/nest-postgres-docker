import { Module } from '@nestjs/common';
import { AuthModule } from '../../domain/use_cases/auth/auth.module';
import { BookModule } from '../../domain/use_cases/book/book.module';
import { StudentModule } from '../../domain/use_cases/student/student.module';
import { UserModule } from '../../domain/use_cases/user/user.module';
import { AuthController } from './v1/auth/auth.controller';
import { BookController } from './v1/book/book.controller';
import { StudentController } from './v1/student/student.controller';
import { UserController } from './v1/user/user.constroller';

@Module({
  imports: [BookModule, StudentModule, UserModule, AuthModule],
  controllers: [
    BookController,
    StudentController,
    UserController,
    AuthController,
  ],
})
export class ControllerV1Module {}
