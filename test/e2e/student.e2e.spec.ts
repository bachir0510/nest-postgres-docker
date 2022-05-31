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

  afterAll(() => {
    database.close();
  });

  it('/student (GET)', () => {
    return request(appTest.getHttpServer()).get('/student').expect(200);
  });
});
