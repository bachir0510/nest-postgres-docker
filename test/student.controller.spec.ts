import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from '../src/app/controllers/v1/student/student.controller';
import { CreatStudent, GetSutdents } from '../src/domain/use_cases/student';
import {TestHelper } from './testHeader';


beforeAll(async () => {
  await TestHelper.instance.setupTestDB();
});

afterAll(() => {
  TestHelper.instance.teardownTestDB();
});

describe('StudentController', () => {
  let controller: StudentController;


  beforeEach(async () => {
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
