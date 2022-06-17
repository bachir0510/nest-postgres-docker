import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateStudentDTO } from '../../dto/student/createStudent.dto';
import { Student } from '../../entities/student.entity';

@Injectable()
export class CreateStudent {
  constructor(
    @Inject(Student.name)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async call(studentDTO: CreateStudentDTO): Promise<Student> {
    const student: Student = this.studentRepository.create(studentDTO);
    return this.studentRepository.save(student);
  }
}
