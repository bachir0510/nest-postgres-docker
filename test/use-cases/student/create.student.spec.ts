import { Connection } from 'typeorm';
import { CreateStudent } from '../../../src/domain/use_cases/student';
import { testsAppModule } from '../../test.app.module.factory';

const dto = {
  nia: '1111',
  name: 'Juan',
  lastName: 'ParaJuan',
  motherName: 'MamaJuan',
  group: '1',
  classGroup: 'a',
};

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

  it('should create a new student and return that', async () => {
    expect(await createStudent.call(dto)).toEqual({
      id: expect.any(Number),
      nia: dto.nia,
      name: dto.name,
      lastName: dto.lastName,
      motherName: dto.motherName,
      group: dto.group,
      classGroup: dto.classGroup,
    });
  });
});
