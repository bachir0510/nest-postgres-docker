import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { studentProvider } from '../../../infrastructure/database/providers/student.provider';
import {
  CreateStudent,
  GetStudents,
  GetByIdStudent,
  UpdateStudent,
  DeleteSutdent,
} from './';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...studentProvider,
    GetByIdStudent,
    CreateStudent,
    GetStudents,
    UpdateStudent,
    DeleteSutdent,
  ],
  exports: [
    GetByIdStudent,
    CreateStudent,
    GetStudents,
    UpdateStudent,
    DeleteSutdent,
  ],
})
export class StudentModule {}
