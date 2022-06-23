import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { HttpConfigService } from "../../domain/config/http.config";
import { BookService } from "./book.service";

@Module({
    imports:[HttpModule.registerAsync({
        useClass: HttpConfigService,
      })],
    exports:[BookService],
    providers:[BookService],
})
export class ServiceModule{}