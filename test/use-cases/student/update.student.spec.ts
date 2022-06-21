import { Connection, Repository, UpdateResult } from 'typeorm';
import { UpdateStudentDTO } from '../../../src/domain/dto/student/updateStudent.dto';
import { Student } from '../../../src/domain/entitiy/student.entity';
import { UpdateStudent } from '../../../src/domain/use_cases/student';
import { mockUpdateStudentDto } from '../../studentData';
import { testsAppModule } from '../../test.app.module.factory';

describe('StudentController', () => {
  let database: Connection;
  let updateStudent: UpdateStudent;
  let studentRepository: Repository<Student>;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    database = nestModule.get('DATABASE_CONNECTION');
    updateStudent = nestModule.get(UpdateStudent);
    studentRepository = nestModule.get(Student.name);
  });

  afterAll(async () => {
    await database.close();
  });

  it('should be defined', () => {
    expect(updateStudent).toBeDefined();
  });

  describe('Update', () => {
    const studentId = 1;
    const mockUpdate: UpdateResult = {
      raw: undefined,
      affected: 1,
      generatedMaps: [],
    };
    it('should update a student', async () => {
      const updateSpy = jest
        .spyOn(studentRepository, 'update')
        .mockImplementationOnce(() => Promise.resolve(mockUpdate));
      const response = await updateStudent.call(
        studentId,
        mockUpdateStudentDto,
      );
      expect(updateSpy).toHaveBeenCalledWith(studentId, mockUpdateStudentDto);
      expect(response.affected).toEqual(1);
    });
  });
});
