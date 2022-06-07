import { Connection, Repository, UpdateResult } from 'typeorm';
import { UpdateStudentDTO } from '../../../src/domain/dto/student/updateStudent.dto';
import { Student } from '../../../src/domain/entitys/student.entity';
import { UpdateStudent } from '../../../src/domain/use_cases/student';
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
    it('should update a student', async () => {
      const studentDto: UpdateStudentDTO = {
        nia: '151515',
        name: 'Alberto',
        lastName: 'PapaAlberto',
        motherName: 'MamaAlberto',
        group: '1',
        classGroup: 'a',
      };
      const mockUpdate: UpdateResult = {
        raw: undefined,
        affected: 1,
        generatedMaps: [],
      };
      const updateSpy = jest
        .spyOn(studentRepository, 'update')
        .mockImplementationOnce(() => Promise.resolve(mockUpdate));
      const response = await updateStudent.call(studentId, studentDto);
      expect(updateSpy).toHaveBeenCalledWith(studentId, studentDto);
      expect(response.affected).toEqual(1);
    });
  });
});
