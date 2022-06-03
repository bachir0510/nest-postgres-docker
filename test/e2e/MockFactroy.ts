import { CreateStudentDTO } from '../../src/domain/dto/student/createStudent.dto';

export class MockFactory {
  genCreateNoteDto() {
    const dto = new CreateStudentDTO();
    return dto;
  }
}
