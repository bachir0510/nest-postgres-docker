import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateStudentDTO } from '../../dto/student/createStudent.dto';
import { StudentOutputDto } from '../../dto/student/studentOutput.dto';
import { Student } from '../../entity/student.entity';

@Injectable()
export class CreateStudent {
  constructor(
    @Inject(Student.name)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async call(studentDTO: CreateStudentDTO): Promise<StudentOutputDto> {
    const createStudent = this.studentRepository.create(studentDTO);
    return await this.studentRepository.save(createStudent);
  }
}
