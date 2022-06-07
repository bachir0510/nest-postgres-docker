import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from '../../entitys/student.entity';

@Injectable()
export class DeleteStudent {
  constructor(
    @Inject(Student.name)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async call(id: number): Promise<Student> {
    const student: Student = await this.studentRepository.findOne(id);
    return this.studentRepository.remove(student);
  }
}
