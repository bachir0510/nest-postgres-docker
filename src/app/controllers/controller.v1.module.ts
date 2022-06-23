import { Module } from '@nestjs/common';
import { AuthModule } from '../../domain/use_cases/auth/auth.module';
import { StudentModule } from '../../domain/use_cases/student/student.module';
import { UserModule } from '../../domain/use_cases/user/user.module';
import { AuthController } from './v1/auth/auth.controller';
import { StudentController } from './v1/student/student.controller';
import { UserController } from './v1/user/user.constroller';

@Module({
  imports: [StudentModule, UserModule, AuthModule],
  controllers: [StudentController, UserController, AuthController],
})
export class ControllerV1Module {}
