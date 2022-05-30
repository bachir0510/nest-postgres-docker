import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { studentProvider } from '../../../infrastructure/database/providers/student.provider';
import { CreatStudent, GetSutdents } from './';

@Module({
  imports: [DatabaseModule],
  providers: [...studentProvider, GetSutdents, CreatStudent],
  exports: [GetSutdents, CreatStudent],
})
export class StudentModule {}
