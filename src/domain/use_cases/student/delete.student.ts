import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from '../../entitys/student.entity';

@Injectable()
export class DeleteSutdent {
  constructor(
    @Inject(Student.name)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async call(id) : Promise<any>{
    const student = await this.studentRepository.findOne(id);
   const removeStudent = await this.studentRepository.remove(student);
    
   return removeStudent[0]
  }
}
