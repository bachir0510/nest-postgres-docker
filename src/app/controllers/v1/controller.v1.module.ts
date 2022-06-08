import { Module } from '@nestjs/common';
import { StudentModule } from '../../../domain/use_cases/student/student.module';
import { UserModule } from '../../../domain/use_cases/user/user.module';
import { StudentController } from './student/student.controller';
import { UserController } from './user/user.constroller';

@Module({
  imports: [StudentModule, UserModule],
  controllers: [StudentController, UserController],
})
export class ControllerV1Module {}
