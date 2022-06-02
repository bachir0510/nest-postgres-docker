import { Test } from '@nestjs/testing';
import { Connection } from 'typeorm';
import { CreateStudentDTO } from '../../../src/domain/dto/student/createStudent.dto';
import { GetStudents } from '../../../src/domain/use_cases/student';
import { testsAppModule } from '../../test.app.module.factory';

const studentData = {
  nia: '151515',
  name: 'Alberto',
  lastName: 'PapaAlberto',
  motherName: 'MamaAlberto',
  group: '1',
  classGroup: 'a',
};

describe('StudentController', () => {
  let database: Connection;
  let getStudent: GetStudents;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    getStudent = nestModule.get(GetStudents);
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
    expect(getStudent).toBeDefined();
  });

  it('Get all Students', async () => {
    it('should find all solicitudes', async () => { 
      expect(await getStudent.call()).toEqual([studentData]);
    });
  });
});
