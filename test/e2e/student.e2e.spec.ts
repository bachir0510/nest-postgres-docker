import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Connection } from 'typeorm';
import { testsAppModule } from '../test.app.module.factory';
import { MockFactory } from './MockFactroy';

describe('StudentController (e2e)', () => {
  let appTest: INestApplication;
  let database: Connection;
  const mockFactory = new MockFactory();
  const newStudent = mockFactory.genCreateNoteDto();

  beforeEach(async () => {
    const [app, nestModule] = await testsAppModule();
    appTest = app;
    database = nestModule.get('DATABASE_CONNECTION');
  });

  afterAll(() => {
    database.close();
  });

  it('/student (GET)', () => {
    return request(appTest.getHttpServer()).get('/student').expect(200);
  });

  it('/student (POST)', async () => {
    try {
      const response = await request(appTest.getHttpServer())
        .post('/student')
        .send(newStudent);
        
      expect(response.status).toBe(201);
      expect(typeof response.body).toBe('object');
    } catch (err) {
      throw err;
    }
  });
});
