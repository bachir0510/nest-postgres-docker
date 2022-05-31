import { Test} from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
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

  it('should create a new student and return that', async () => {
    const dto = {
      nia: '1111',
      name: 'Juan',
      lastName: 'ParaJuan',
      motherName: 'MamaJuan',
      group: '1',
      classGroup: 'a',
    };
    expect(await service.call(dto)).toEqual({
      id: expect.any(Number),
      name: dto.name,
      lastName: dto.lastName,
      motherName: dto.motherName,
      group: dto.group,
      classGroup: dto.classGroup,
    });
  });
});
