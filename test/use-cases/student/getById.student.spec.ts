import { Test } from '@nestjs/testing';
import { Connection, FindOneOptions } from 'typeorm';
import { GetByIdStudent } from '../../../src/domain/use_cases/student';
import { testsAppModule } from '../../test.app.module.factory';



describe('StudentController', () => {
  let database: Connection;
  let getByIdStudent: GetByIdStudent;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    getByIdStudent = nestModule.get(GetByIdStudent);
    database = nestModule.get('DATABASE_CONNECTION');
  });

  afterAll(() => {
    database.close();
  });

  beforeEach(async () => {
    Test.createTestingModule({
      providers: [GetByIdStudent],
    });
  });

  it('should be defined', () => {
    expect(GetByIdStudent).toBeDefined();
  });

  
});
