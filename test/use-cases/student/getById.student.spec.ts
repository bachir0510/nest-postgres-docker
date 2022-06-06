import { Connection, Repository } from 'typeorm';
import { Student } from '../../../src/domain/entitys/student.entity';
import { GetByIdStudent } from '../../../src/domain/use_cases/student';
import { testsAppModule } from '../../test.app.module.factory';

describe('StudentController', () => {
  let database: Connection;
  let getByIdStudent: GetByIdStudent;
  let studentRepository: Repository<Student>;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    database = nestModule.get('DATABASE_CONNECTION');
    getByIdStudent = nestModule.get(GetByIdStudent);
    studentRepository = nestModule.get(Student.name);
  });

  afterAll(async () => {
    await database.dropDatabase();
    await database.close();
  });

  it('should be defined', () => {
    expect(GetByIdStudent).toBeDefined();
  });

  describe('Get One Student', () => {
    const studentId = 1;
    it('should find one student by id', async () => {
      const studentEntity = {
        id: 1,
        nia: '151515',
        name: 'Alberto',
        lastName: 'PapaAlberto',
        motherName: 'MamaAlberto',
        group: '1',
        classGroup: 'a',
      };
      jest
        .spyOn(studentRepository, 'findOne')
        .mockResolvedValueOnce(studentEntity);
      expect(await getByIdStudent.call(studentId)).toEqual(studentEntity);
    });
  });
});
