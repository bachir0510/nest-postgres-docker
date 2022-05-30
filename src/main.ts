import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';

const URL_SWAGGER = 'api/v1/docs/';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  dotenv.config();
  const options = new DocumentBuilder()
    .setTitle('Students API')
    .setDescription('The Students API description')
    .setVersion('1.0')
    .build();
  const documentV1 = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(URL_SWAGGER, app, documentV1);
  Logger.log('Swagger configured');

  await app.listen(AppModule.port);
  Logger.log(`Server start on port: ${AppModule.port}`);
}
bootstrap();
