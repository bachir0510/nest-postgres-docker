import { CreateStudentDTO } from '../src/domain/dto/student/createStudent.dto';
import { UpdateStudentDTO } from '../src/domain/dto/student/updateStudent.dto';
import { Student } from '../src/domain/entity/student.entity';

export const mockCreateStudentDto: CreateStudentDTO = {
  nia: '0000',
  name: 'Alberto',
  lastName: 'PapaAlberto',
  motherName: 'MamaAlberto',
  group: '1',
  classGroup: 'a',
};

export const mockUpdateStudentDto: UpdateStudentDTO = {
  nia: '0000',
  name: 'Alberto',
  lastName: 'PapaAlberto',
  motherName: 'MamaAlberto',
  group: '1',
  classGroup: 'a',
};

export const mockStudentEntity: Student = {
  id: 1,
  nia: '0000',
  name: 'Alberto',
  lastName: 'PapaAlberto',
  motherName: 'MamaAlberto',
  group: '1',
  classGroup: 'a',
};
