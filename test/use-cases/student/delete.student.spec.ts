import { Test } from '@nestjs/testing';
import { Connection } from 'typeorm';
import { DeleteSutdent} from '../../../src/domain/use_cases/student';
import { testsAppModule } from '../../test.app.module.factory';



describe('StudentController', () => {
  let database: Connection;
  let deleteStudent: DeleteSutdent;

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

  it('should call deleteStudent with expected param', async () => {
    const deleteSpy = jest.spyOn(deleteStudent, "call");
    const id = "id";
    deleteStudent.call('id');
    expect(deleteSpy).toHaveBeenCalledWith(id)
  })
  
});
