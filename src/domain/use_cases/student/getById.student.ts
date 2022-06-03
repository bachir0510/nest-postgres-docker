import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from '../../entitys/student.entity';

@Injectable()
export class GetByIdStudent {
  constructor(
    @Inject(Student.name)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async call(id: number): Promise<Student> {
    return await this.studentRepository.findOne(id);
  }
}
