import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GetStudentOutputDTO } from '../../dto/student/getAllOutput.dto';
import { Student } from '../../entitys/student.entity';

@Injectable()
export class GetByIdStudent {
  constructor(
    @Inject(Student.name)
    private readonly studentRepository: Repository<GetStudentOutputDTO>,
  ) {}

  async call(id: number) {
    return this.studentRepository.findOne(id);
  }
}
