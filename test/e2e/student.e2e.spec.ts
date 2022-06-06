import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Connection } from 'typeorm';
import { testsAppModule } from '../test.app.module.factory';

describe('StudentController (e2e)', () => {
  let appTest: INestApplication;
  let database: Connection;

  beforeEach(async () => {
    const [app, nestModule] = await testsAppModule();
    appTest = app;
    database = nestModule.get('DATABASE_CONNECTION');
  });

  afterAll(async () => {
    await database.close();
  });

  it('/student (POST)', () => {
    return request(appTest.getHttpServer()).post('/student').expect(201);
  });

  it('/student (GET)', () => {
    return request(appTest.getHttpServer()).get('/student').expect(200);
  });

  it('/student:id (GET)', () => {
    return request(appTest.getHttpServer()).get('/student/:id').expect(200);
  });

  it('/student/:id (PUT)', () => {
    return request(appTest.getHttpServer()).put('/student/:id').expect(200);
  });

  it('/student/:id (DELETE)', () => {
    return request(appTest.getHttpServer()).delete('/student/:id').expect(200);
  });
});
