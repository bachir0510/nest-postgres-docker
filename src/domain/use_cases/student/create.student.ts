import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateStudentDTO } from '../../dto/student/createStudent.dto';
<<<<<<< HEAD
import { StudentOutputDto } from '../../dto/student/studentOutput.dto';
import { Student } from '../../entitys/student.entity';
=======
import { Student } from '../../entities/student.entity';
>>>>>>> develop

@Injectable()
export class CreateStudent {
  constructor(
    @Inject(Student.name)
    private readonly studentRepository: Repository<Student>,
  ) {}

<<<<<<< HEAD
  async call(studentDTO: CreateStudentDTO): Promise<StudentOutputDto> {
    const createStudent = this.studentRepository.create(studentDTO);
    return await this.studentRepository.save(createStudent);
=======
  async call(studentDTO: CreateStudentDTO): Promise<Student> {
    const student: Student = this.studentRepository.create(studentDTO);
    return this.studentRepository.save(student);
>>>>>>> develop
  }
}
