import { Connection, Repository } from 'typeorm';
import { Student } from '../../src/domain/entity/student.entity';
import { CreateStudent } from '../../src/domain/use_cases/student';
import { mockCreateStudentDto, mockStudentEntity } from '../studentData';
import { testsAppModule } from '../test.app.module.factory';

describe('StudentController', () => {
  let database: Connection;
  let createStudent: CreateStudent;
  let studentRepository: Repository<Student>;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    database = nestModule.get('DATABASE_CONNECTION');
    createStudent = nestModule.get(CreateStudent);
    studentRepository = nestModule.get(Student.name);
  });

  afterAll(async () => {
    await database.close();
  });

  it('should be defined', () => {
    expect(createStudent).toBeDefined();
  });

  describe('Create', () => {
    it('should create a new student', async () => {
      const createSpy = jest
        .spyOn(studentRepository, 'create')
        .mockReturnValueOnce(mockStudentEntity);
      jest
        .spyOn(studentRepository, 'save')
        .mockImplementationOnce(() => Promise.resolve(mockStudentEntity));

      expect(await createStudent.call(mockCreateStudentDto)).toEqual({
        id: expect.any(Number),
        ...mockCreateStudentDto,
      });
      expect(createSpy).toHaveBeenCalledWith(mockCreateStudentDto);
    });
  });
});
