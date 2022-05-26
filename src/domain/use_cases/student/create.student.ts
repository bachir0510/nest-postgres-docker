import { Inject, Injectable } from "@nestjs/common";
import { CreateStudentDTO } from "src/domain/dto/student/createStudent.dto";
import { Student } from "src/domain/entitys/student.entity";
import { Repository } from "typeorm";

@Injectable()
export class CreatStudent {
    constructor(
        @Inject(Student.name)
        private readonly studentRepository: Repository<Student>,
      ) {}
    
    async call(studentDTO: CreateStudentDTO){
        const createStudent =  this.studentRepository.create(studentDTO)
        return await this.studentRepository.save(createStudent)
    }
}
