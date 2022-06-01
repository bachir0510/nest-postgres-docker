import { Connection } from 'typeorm';
import { UpdateStudentDTO } from '../../../src/domain/dto/student/updateStudent.dto';
import { UpdateStudent } from '../../../src/domain/use_cases/student';
import { testsAppModule } from '../../test.app.module.factory';

const dto: UpdateStudentDTO = {
  nia: '1111',
  name: 'Juan',
  lastName: 'ParaJuan',
  motherName: 'MamaJuan',
  group: '1',
  classGroup: 'a',
};

describe('StudentController', () => {
  let database: Connection;
  let updateStudent: UpdateStudent;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    database = nestModule.get('DATABASE_CONNECTION');
    updateStudent = nestModule.get(UpdateStudent);
});

  afterAll(() => {
    database.close();
  });

  it('should be defined', () => {
    expect(updateStudent).toBeDefined();
  });

  // it('should update a student', async () => {
  //   expect(await updateStudent.call(1, dto)).toEqual({
  //     id: 1,
  //     ...dto,
  //   });
  // });
});
