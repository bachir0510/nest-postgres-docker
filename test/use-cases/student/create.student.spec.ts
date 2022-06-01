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

  it('should call saveNote method with expected params', async () => {
    const createStudentSpy = jest.spyOn(createStudent, 'call');
    const dto = new CreateStudentDTO();
    dto.nia = 'string';
    dto.name = 'string';
    dto.lastName = 'string';
    dto.classGroup = 'string';
    dto.motherName = 'string';
    dto.group = 'string';
    await createStudent.call(dto);
    expect(createStudentSpy).toHaveBeenCalledWith(dto);
  });

  it('should create one student', async () => {
    const dto: CreateStudentDTO = {
      name: 'string',
      nia: 'string',
      classGroup: 'string',
      group: 'string',
      lastName: 'string',
      motherName: 'string',
    };
    const response = await createStudent.call(dto);
    expect(response.nia).toEqual(dto.nia);
    expect(response.name).toEqual(dto.name);
    expect(response.classGroup).toEqual(dto.classGroup);
    expect(response.group).toEqual(dto.group);
    expect(response.lastName).toEqual(dto.lastName);
    expect(response.motherName).toEqual(dto.motherName);
  });
});
