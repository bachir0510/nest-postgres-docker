import { Connection, Repository } from 'typeorm';
import { Student } from '../../../src/domain/entities/student.entity';
import { GetStudents } from '../../../src/domain/use_cases/student';
import { mockStudentEntity } from '../../studentData';
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
    await database.close();
  });

  it('should be defined', () => {
    expect(getStudent).toBeDefined();
  });

  describe('Get all Students', () => {
    it('should find all students', async () => {
      jest
        .spyOn(studentEntity, 'find')
        .mockImplementationOnce(() => Promise.resolve([mockStudentEntity]));
      expect(await getStudent.call()).toEqual([mockStudentEntity]);
    });
  });
});
