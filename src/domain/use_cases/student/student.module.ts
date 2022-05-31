import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { studentProvider } from '../../../infrastructure/database/providers/student.provider';
import { CreateStudent, GetStudents } from './';

@Module({
  imports: [DatabaseModule],
  providers: [...studentProvider, GetStudents, CreateStudent],
  exports: [GetStudents, CreateStudent],
})
export class StudentModule {}
