import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GetStudentOutputDTO } from '../../dto/student/getAllOutput.dto';
import { StudentOutputDto } from '../../dto/student/studentOutput.dto';
import { Student } from '../../entitys/student.entity';

@Injectable()
export class GetStudents {
  constructor(
    @Inject(Student.name)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async call(): Promise<GetStudentOutputDTO[]> {
    return this.studentRepository.find();
  }
}
