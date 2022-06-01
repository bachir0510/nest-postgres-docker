import { Body } from '@nestjs/common';
import { Connection } from 'typeorm';
import { StudentController } from '../../src/app/controllers/v1/student/student.controller';
import { CreateStudentDTO } from '../../src/domain/dto/student/createStudent.dto';
import { Student } from '../../src/domain/entitys/student.entity';
import {
  CreateStudent,
  DeleteSutdent,
  GetByIdStudent,
  GetStudents,
  UpdateStudent,
} from '../../src/domain/use_cases/student';
import { testsAppModule } from '../test.app.module.factory';

describe('StudentController', () => {
  let database: Connection;
  let controller: StudentController;
  let createStudent: CreateStudent;
  let getStudents: GetStudents;
  let getByIdStudent: GetByIdStudent;
  let deleteSutdent: DeleteSutdent;
  let updateStudent: UpdateStudent;

  const newStudentEntity = new Student();

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    database = nestModule.get('DATABASE_CONNECTION');
    controller = nestModule.get(StudentController);
    createStudent = nestModule.get(CreateStudent);
    getStudents = nestModule.get(GetStudents);
    getByIdStudent = nestModule.get(GetByIdStudent);
    deleteSutdent = nestModule.get(DeleteSutdent);
    updateStudent = nestModule.get(UpdateStudent);
  });

  afterAll(() => {
    database.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should create a new student ', async () => {
    const dto: CreateStudentDTO = {
      nia: '151515',
      name: 'Alberto',
      lastName: 'PapaAlberto',
      motherName: 'MamaAlberto',
      group: '1',
      classGroup: 'a',
    };

    const result = await controller.create(dto);

    expect(result).toEqual({
      id: expect.any(Number),
      nia: dto.nia,
      name: dto.name,
      lastName: dto.lastName,
      motherName: dto.motherName,
      group: dto.group,
      classGroup: dto.classGroup,
    });
   jest.spyOn(createStudent, 'call').mockImplementation(()=> Promise.resolve(result))
   expect(createStudent.call).toHaveBeenCalledTimes(0)
   expect(createStudent.call).toHaveBeenCalledWith(dto)
  });
});
