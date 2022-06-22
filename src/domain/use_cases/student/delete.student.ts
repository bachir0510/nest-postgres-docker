import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GetStudentOutputDTO } from '../../dto/student/getAllOutput.dto';
import { Student } from '../../entity/student.entity';

@Injectable()
export class DeleteStudent {
  constructor(
    @Inject(Student.name)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async call(id: number): Promise<GetStudentOutputDTO> {
    const student: Student = await this.studentRepository.findOne(id);
    return this.studentRepository.remove(student);
  }
}
