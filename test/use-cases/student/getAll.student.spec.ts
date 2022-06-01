import { Test } from '@nestjs/testing';
import { Connection } from 'typeorm';
import { GetStudents } from '../../../src/domain/use_cases/student';
import { testsAppModule } from '../../test.app.module.factory';

describe('StudentController', () => {
  let database: Connection;
  let getStudents: GetStudents;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    getStudents = nestModule.get(GetStudents);
    database = nestModule.get('DATABASE_CONNECTION');
  });

  afterAll(() => {
    database.close();
  });

  beforeEach(async () => {
    Test.createTestingModule({
      providers: [GetStudents],
    });
  });

  it('should be defined', () => {
    expect(getStudents).toBeDefined();
  });

  it('Get all Students empty', async () => {
    const result = [];
    jest
      .spyOn(getStudents, 'call')
      .mockImplementation(() => Promise.resolve(result));
    expect(await getStudents.call()).toBe(result);
  });
});
