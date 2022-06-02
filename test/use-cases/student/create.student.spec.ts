import { Connection } from 'typeorm';
import { CreateStudentDTO } from '../../../src/domain/dto/student/createStudent.dto';
import { CreateStudent } from '../../../src/domain/use_cases/student';
import { testsAppModule } from '../../test.app.module.factory';

describe('StudentController', () => {
  let database: Connection;
  let createStudent: CreateStudent;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    createStudent = nestModule.get(CreateStudent);
    database = nestModule.get('DATABASE_CONNECTION');
  });

  afterAll(() => {
    database.close();
  });

  it('should be defined', () => {
    expect(createStudent).toBeDefined();
  });

  it('should create a student', async () => {
    const createStudentDto: CreateStudentDTO = {
      nia: '151515',
      name: 'Alberto',
      lastName: 'PapaAlberto',
      motherName: 'MamaAlberto',
      group: '1',
      classGroup: 'a',
    };
    expect(await createStudent.call(createStudentDto)).toEqual({
      id: expect.any(Number),
      ...createStudentDto,
    });
  });
});
