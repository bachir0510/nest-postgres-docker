import { Connection, Repository } from 'typeorm';
import { Student } from '../../../src/domain/entitiy/student.entity';
import { DeleteStudent } from '../../../src/domain/use_cases/student';
import { mockStudentEntity } from '../../studentData';
import { testsAppModule } from '../../test.app.module.factory';

describe('StudentController', () => {
  let database: Connection;
  let deleteStudent: DeleteStudent;
  let studentRepository: Repository<Student>;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    database = nestModule.get('DATABASE_CONNECTION');
    deleteStudent = nestModule.get(DeleteStudent);
    studentRepository = nestModule.get(Student.name);
  });

  afterAll(async () => {
    await database.close();
  });

  it('should be defined', () => {
    expect(deleteStudent).toBeDefined();
  });

  describe('Delete', () => {
    const studentId = 1;
    it('should delete a student', async () => {
      jest
        .spyOn(studentRepository, 'findOne')
        .mockImplementationOnce(() => Promise.resolve(mockStudentEntity));
      const deleteSpy = jest
        .spyOn(studentRepository, 'remove')
        .mockImplementationOnce(() => Promise.resolve(mockStudentEntity));
      const response = await deleteStudent.call(studentId);
      expect(response).toEqual(mockStudentEntity);
      expect(deleteSpy).toHaveBeenCalledWith(mockStudentEntity);
    });
  });
});
