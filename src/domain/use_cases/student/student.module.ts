import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { studentProvider } from '../../../infrastructure/database/providers/student.provider';
import {
  CreateStudent,
  GetStudents,
  GetByIdStudent,
  UpdateStudent,
  DeleteStudent,
} from './';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...studentProvider,
    GetByIdStudent,
    CreateStudent,
    GetStudents,
    UpdateStudent,
    DeleteStudent,
  ],
  exports: [
    GetByIdStudent,
    CreateStudent,
    GetStudents,
    UpdateStudent,
    DeleteStudent,
  ],
})
export class StudentModule {}
