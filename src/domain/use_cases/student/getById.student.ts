import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
<<<<<<< HEAD
import { GetStudentOutputDTO } from '../../dto/student/getAllOutput.dto';
import { Student } from '../../entitys/student.entity';
=======
import { Student } from '../../entities/student.entity';
>>>>>>> develop

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
