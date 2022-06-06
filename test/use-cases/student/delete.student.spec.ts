import { Connection, Repository } from 'typeorm';
import { Student } from '../../../src/domain/entitys/student.entity';
import { DeleteSutdent } from '../../../src/domain/use_cases/student';
import { testsAppModule } from '../../test.app.module.factory';

describe('StudentController', () => {
  let database: Connection;
  let deleteStudent: DeleteSutdent;
  let studentRepository: Repository<Student>;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    database = nestModule.get('DATABASE_CONNECTION');
    deleteStudent = nestModule.get(DeleteSutdent);
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
    const studentEntity: Student = {
      nia: '151515',
      name: 'Alberto',
      lastName: 'PapaAlberto',
      motherName: 'MamaAlberto',
      group: '1',
      classGroup: 'a',
      id: 1,
    };

    it('should delete a student', async () => {
      jest
        .spyOn(studentRepository, 'findOne')
        .mockImplementationOnce(() => Promise.resolve(studentEntity));
      const deleteSpy = jest
        .spyOn(studentRepository, 'remove')
        .mockImplementationOnce(() => Promise.resolve(studentEntity));
      const response = await deleteStudent.call(studentId);
      expect(response).toEqual(studentEntity);
      expect(deleteSpy).toHaveBeenCalledWith(studentEntity);
    });
  });
});
