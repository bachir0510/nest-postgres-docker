import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerV1Module } from './app/controllers/v1/controller.v1.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [DatabaseModule, ControllerV1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
