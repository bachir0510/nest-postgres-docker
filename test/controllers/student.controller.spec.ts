import { Connection } from 'typeorm';
import { StudentController } from '../../src/app/controllers/v1/student/student.controller';
import { CreateStudentDTO } from '../../src/domain/dto/student/createStudent.dto';
import { GetStudents } from '../../src/domain/use_cases/student';
import { testsAppModule } from '../test.app.module.factory';

describe('StudentController', () => {
  let studentController: StudentController;
  let database: Connection;
  let getStudents: GetStudents;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    studentController = nestModule.get(StudentController);
    database = nestModule.get('DATABASE_CONNECTION');
    getStudents = nestModule.get(GetStudents);
  });

  afterAll(() => {
    database.close();
  });

  it('should be defined', () => {
    expect(studentController).toBeDefined();
  });

  it('Get all Students', async () => {
    const result: CreateStudentDTO[] = [
      {
        nia: 'string',
        name: 'string',
        lastName: 'string',
        motherName: 'string',
        group: 'string',
        classGroup: 'string',
      },
    ];
    jest
      .spyOn(getStudents, 'call')
      .mockImplementation(() => Promise.resolve(result));

    const response = await studentController.getAll();
    expect(response).toBe(result);
    expect(response).toHaveLength(1);
  });
});
