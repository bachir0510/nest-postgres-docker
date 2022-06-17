import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
<<<<<<< HEAD
<<<<<<< HEAD
import { GetStudentOutputDTO } from '../../dto/student/getAllOutput.dto';
import { StudentOutputDto } from '../../dto/student/studentOutput.dto';
=======
>>>>>>> parent of caf4406 (feat: format)
import { Student } from '../../entitys/student.entity';
=======
import { Student } from '../../entities/student.entity';
>>>>>>> develop

@Injectable()
export class GetStudents {
  constructor(
    @Inject(Student.name)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async call(): Promise<Student[]> {
    return this.studentRepository.find();
  }
}
