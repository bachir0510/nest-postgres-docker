import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateStudentDTO } from "../../dto/student/createStudent.dto";
import { Student } from "../../entitys/student.entity";


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
