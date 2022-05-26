import { Inject, Injectable } from "@nestjs/common";
import { Student } from "src/domain/entitys/student.entity";
import { Repository } from "typeorm";

@Injectable()
export class GetSutdents {
    constructor(
        @Inject(Student.name)
        private readonly studentRepository: Repository<Student>,
      ) {}

    async call(): Promise<Student[]>{
        return await this.studentRepository.find();
    }
}