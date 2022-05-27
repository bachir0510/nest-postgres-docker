import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from '../src/app/controllers/v1/student/student.controller';
import { CreatStudent, GetSutdents } from '../src/domain/use_cases/student';
import { connectionTest } from './connectionTest';

describe('StudentController', () => {
  let controller: StudentController;

  beforeAll(async () => {
    await connectionTest.create();
  });

  afterAll(async () => {
    await connectionTest.close();
  });

  beforeEach(async () => {
    await connectionTest.clear();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [CreatStudent, GetSutdents],
    }).compile();

    controller = module.get<StudentController>(StudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
