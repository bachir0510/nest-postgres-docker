import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateStudentDTO } from '../../dto/student/createStudent.dto';
import { Student } from '../../entitys/student.entity';

@Injectable()
export class CreateStudent {
  constructor(
    @Inject(Student.name)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async call(studentDTO: CreateStudentDTO): Promise<CreateStudentDTO> {
    const createStudent = this.studentRepository.create(studentDTO);
    const entitySaved = await this.studentRepository.save(createStudent);
    return {
      name: entitySaved.name,
      nia: entitySaved.nia,
      classGroup: entitySaved.classGroup,
      group: entitySaved.group,
      lastName: entitySaved.lastName,
      motherName: entitySaved.motherName,
    };
  }
}
