import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerV1Module } from './app/controllers/controller.v1.module';
import { DatabaseModule } from './infrastructure/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    DatabaseModule, ControllerV1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number;

  constructor(private readonly configServer: ConfigService) {
    AppModule.port = this.configServer.get('PORT');
  }
}
