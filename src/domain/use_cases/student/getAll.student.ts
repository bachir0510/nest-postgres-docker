import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateStudentDTO } from '../../dto/student/createStudent.dto';
import { Student } from '../../entitys/student.entity';

@Injectable()
export class GetStudents {
  constructor(
    @Inject(Student.name)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async call(): Promise<CreateStudentDTO[]> {
    const responseDB = await this.studentRepository.find();
    return responseDB.map((model) => {
      return {
        nia: model.nia,
        name: model.name,
        lastName: model.lastName,
        motherName: model.motherName,
        group: model.group,
        classGroup: model.classGroup,
      };
    });
  }
}
