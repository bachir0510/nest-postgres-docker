import { Test } from '@nestjs/testing';
import { Connection, Repository } from 'typeorm';
import { Student } from '../../../src/domain/entitys/student.entity';
import { DeleteSutdent} from '../../../src/domain/use_cases/student';
import { testsAppModule } from '../../test.app.module.factory';



describe('StudentController', () => {
  let database: Connection;
  let deleteStudent: DeleteSutdent;
  let studentRepostory: Repository<Student>

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    deleteStudent = nestModule.get(DeleteSutdent);
    database = nestModule.get('DATABASE_CONNECTION');
  });

  afterAll(() => {
    database.close();
  });

  beforeEach(async () => {
    Test.createTestingModule({
      providers: [DeleteSutdent],
    });
  });

  it('should be defined', () => {
    expect(deleteStudent).toBeDefined();
  });

  it('should delete a student', async () => {
   expect( deleteStudent.call(1)).toBeDefined;
  })
  
});
