import { Test } from '@nestjs/testing';
import { Connection } from 'typeorm';
import { Student } from '../../../src/domain/entitys/student.entity';
import { GetStudents } from '../../../src/domain/use_cases/student';
import { testsAppModule } from '../../test.app.module.factory';

describe('StudentController', () => {
  let database: Connection;
  let service: GetStudents;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    service = nestModule.get(GetStudents);
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
    expect(service).toBeDefined();
  });

  it('Get all Students', async () => {
    const result = ['students'] ;
    const getAllStudentSpy = jest
      .spyOn(service, 'call')
      .mockImplementation(() => Promise.resolve(result[]));

    expect(getAllStudentSpy).toBe(result);
  });
});
