import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UpdateStudentDTO } from '../../dto/student/updateStudent.dto';
import { Student } from '../../entity/student.entity';

@Injectable()
export class UpdateStudent {
  constructor(
    @Inject(Student.name)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async call(id: number, studentDTO: UpdateStudentDTO) {
    return this.studentRepository.update(id, studentDTO);
  }
}
