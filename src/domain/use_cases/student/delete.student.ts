import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from '../../entitys/student.entity';

@Injectable()
export class DeleteSutdent {
  constructor(
    @Inject(Student.name)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async call(id) : Promise<void>{
    const student = await this.studentRepository.findOne(id);
    if (!student) {
      throw new NotFoundException('Resource not found');
    }

    this.studentRepository.remove(student);
  }
}
