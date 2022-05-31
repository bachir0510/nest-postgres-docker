import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateStudentDTO } from '../../../src/domain/dto/student/createStudent.dto';
import { Student } from '../../../src/domain/entitys/student.entity';
import { CreateStudent } from '../../../src/domain/use_cases/student';
import { testsAppModule } from '../../test.app.module.factory';

describe('StudentController', () => {
  let database: Connection;
  let service: CreateStudent;

  const mockStudentRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest
      .fn()
      .mockImplementation((student) =>
        Promise.resolve({ id: Date.now(), ...student }),
      ),
  };

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    service = nestModule.get(CreateStudent);
    database = nestModule.get('DATABASE_CONNECTION');
  });

  afterAll(() => {
    database.close();
  });

  beforeEach(async () => {
    Test.createTestingModule({
      providers: [
        CreateStudent,
        {
          provide: getRepositoryToken(Student),
          useValue: mockStudentRepository,
        },
      ],
    });
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call saveNote method with expected params', async () => {
    const createStudentSpy = jest.spyOn(service, 'call');
    const dto = new CreateStudentDTO();
    service.call(dto);
    expect(createStudentSpy).toHaveBeenCalledWith(dto);
  });
  
});
