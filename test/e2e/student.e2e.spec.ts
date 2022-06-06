import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Connection } from 'typeorm';
import { StudentController } from '../../src/app/controllers/v1/student/student.controller';
import {
  CreateStudent,
  
} from '../../src/domain/use_cases/student';
import { mockStudentEntity } from '../studentData';
import { testsAppModule } from '../test.app.module.factory';

describe('StudentController (e2e)', () => {
  let appTest: INestApplication;
  let database: Connection;
  let controllerStudent: StudentController;
  let createStudent: CreateStudent;
 

  beforeAll(async () => {
    const [app, nestModule] = await testsAppModule();
    appTest = app;
    database = nestModule.get('DATABASE_CONNECTION');
    controllerStudent = nestModule.get(StudentController);
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
      .spyOn(controllerStudent, 'getAll')
      .mockImplementationOnce(() => Promise.resolve([mockStudentEntity]));
    return request(appTest.getHttpServer()).get('/student').expect(200);
  });

  it('/student/1 (GET)', () => {
    jest.spyOn(controllerStudent, 'getOne').mockImplementationOnce(() => Promise.resolve(mockStudentEntity));
    return request(appTest.getHttpServer()).get('/student/1').expect(200);
  });

  it('/student/1 (PUT)', () => {
    const updateReturn = { raw: undefined, affected: 1, generatedMaps: [] };
    const updateSpy = jest
      .spyOn(controllerStudent, 'update')
      .mockImplementationOnce(() => Promise.resolve(updateReturn));
    return request(appTest.getHttpServer())
      .put('/student/1')
      .expect(HttpStatus.OK)
      .expect(updateSpy)
      
  });

  it('/student/1 (DELETE)', async () => {
    const deleteSpy = jest
      .spyOn(controllerStudent, 'delete')
      .mockImplementationOnce(() => Promise.resolve(mockStudentEntity));
    return request(appTest.getHttpServer())
      .delete('/student/1')
      .expect(200)
      .expect(deleteSpy)
      
  });
});
