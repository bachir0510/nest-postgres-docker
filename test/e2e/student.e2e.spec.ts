import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Connection, Repository } from 'typeorm';
import { UpdateStudentDTO } from '../../src/domain/dto/student/updateStudent.dto';
import { Student } from '../../src/domain/entitys/student.entity';
import { CreateStudent } from '../../src/domain/use_cases/student';
import { mockStudentEntity } from '../studentData';
import { testsAppModule } from '../test.app.module.factory';

describe('StudentController (e2e)', () => {
  let appTest: INestApplication;
  let database: Connection;
  let createStudent: CreateStudent;
  let studentRepository: Repository<Student>;

  beforeAll(async () => {
    const [app, nestModule] = await testsAppModule();
    appTest = app;
    database = nestModule.get('DATABASE_CONNECTION');
    studentRepository = nestModule.get(Student.name);
    createStudent = nestModule.get(CreateStudent);
  });

  afterAll(async () => {
    await database.close();
  });

  it('/student (POST)', async () => {
    jest
      .spyOn(createStudent, 'call')
      .mockImplementationOnce(() => Promise.resolve(mockStudentEntity));
    return request(appTest.getHttpServer())
      .post('/student')
      .expect(201)
      .expect(mockStudentEntity);
  });

  it('/student (GET)', () => {
    jest
      .spyOn(studentRepository, 'find')
      .mockImplementationOnce(() => Promise.resolve([mockStudentEntity]));
    return request(appTest.getHttpServer()).get('/student').expect(200);
  });

  it('/student/1 (GET)', () => {
    jest
      .spyOn(studentRepository, 'findOne')
      .mockImplementationOnce(() => Promise.resolve(mockStudentEntity));
    return request(appTest.getHttpServer()).get('/student/1').expect(200);
  });

  it('/student/1 (PUT)', () => {
    const input: UpdateStudentDTO = {
      nia: 'string',
      classGroup: 'string',
      group: 'string',
      lastName: 'string',
      motherName: 'string',
      name: 'string',
    };
    const updateReturn = { raw: undefined, affected: 1, generatedMaps: [] };
    jest
      .spyOn(studentRepository, 'update')
      .mockImplementationOnce(() => Promise.resolve(updateReturn));
    return request(appTest.getHttpServer())
      .put('/student/1')
      .send(input)
      .expect(HttpStatus.OK)
      .expect({ affected: 1, generatedMaps: [] });
  });

  it('/student/1 (DELETE)', async () => {
    jest
      .spyOn(studentRepository, 'remove')
      .mockImplementationOnce(() => Promise.resolve(mockStudentEntity));
    return request(appTest.getHttpServer())
      .delete('/student/1')
      .expect(200)
      .expect(mockStudentEntity);
  });
});
