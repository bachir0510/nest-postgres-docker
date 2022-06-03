import { Test } from '@nestjs/testing';
import { Connection, Repository } from 'typeorm';
import { Student } from '../../../src/domain/entitys/student.entity';
import { GetStudents } from '../../../src/domain/use_cases/student';
import { testsAppModule } from '../../test.app.module.factory';

describe('GetStudents', () => {
  let database: Connection;
  let getStudent: GetStudents;
  let studentEntity: Repository<Student>;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    getStudent = nestModule.get(GetStudents);
    studentEntity = nestModule.get(Student.name);
    database = nestModule.get('DATABASE_CONNECTION');
  });

  afterAll(async () => {
    await database.dropDatabase();
    database.close();
  });

  beforeEach(() => {
    Test.createTestingModule({
      providers: [GetStudents],
    });
  });

  it('should be defined', () => {
    expect(getStudent).toBeDefined();
  });

  describe('Get all Students', () => {
    const studentData: Student = {
      nia: '151515',
      name: 'Alberto',
      lastName: 'PapaAlberto',
      motherName: 'MamaAlberto',
      group: '1',
      classGroup: 'a',
      id: expect.any(Number),
    };
    it('should find all solicitudes', async () => {
      const entity: Student = {
        nia: '151515',
        name: 'Alberto',
        lastName: 'PapaAlberto',
        motherName: 'MamaAlberto',
        group: '1',
        classGroup: 'a',
        id: 1,
      };
      jest
        .spyOn(studentEntity, 'find')
        .mockImplementationOnce(() => Promise.resolve([entity]));
      expect(await getStudent.call()).toEqual([studentData]);
    });
  });
});
