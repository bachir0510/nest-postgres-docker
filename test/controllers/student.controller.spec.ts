import { Connection } from 'typeorm';
import { StudentController } from '../../src/app/controllers/v1/student/student.controller';
import { testsAppModule } from '../test.app.module.factory';

describe('StudentController', () => {
  let controller: StudentController;
  let database: Connection;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    controller = nestModule.get(StudentController);
    database = nestModule.get('DATABASE_CONNECTION');
  });

  afterAll(() => {
    database.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
