import { Connection, DeleteResult } from 'typeorm';
import { StudentController } from '../../src/app/controllers/v1/student/student.controller';
import { CreateStudentDTO } from '../../src/domain/dto/student/createStudent.dto';
import { UpdateStudentDTO } from '../../src/domain/dto/student/updateStudent.dto';
import { Student } from '../../src/domain/entitys/student.entity';
import {
  DeleteSutdent,
  GetByIdStudent,
  UpdateStudent,
} from '../../src/domain/use_cases/student';
import { testsAppModule } from '../test.app.module.factory';

describe('StudentController', () => {
  let database: Connection;
  let controllerStudent: StudentController;
  let getByIdStudent: GetByIdStudent;
  let deleteSutdent: DeleteSutdent;
  let updateStudent: UpdateStudent;

  const studentData: Student[] = [
    {
      id: 1,
      nia: '151515',
      name: 'Alberto',
      lastName: 'PapaAlberto',
      motherName: 'MamaAlberto',
      group: '1',
      classGroup: 'a',
    },
  ];

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    database = nestModule.get('DATABASE_CONNECTION');
    controllerStudent = nestModule.get(StudentController);
    getByIdStudent = nestModule.get(GetByIdStudent);
    deleteSutdent = nestModule.get(DeleteSutdent);
    updateStudent = nestModule.get(UpdateStudent);

    
  });

  afterAll(() => {
    database.close();
  });

  it('should be defined', () => {
    expect(controllerStudent).toBeDefined();
  });

  it('Should create a new student ', async () => {
    const createStudentDTO: CreateStudentDTO = {
      nia: '151515',
      name: 'Alberto',
      lastName: 'PapaAlberto',
      motherName: 'MamaAlberto',
      group: '1',
      classGroup: 'a',
    };
    expect(await controllerStudent.create(createStudentDTO)).toEqual({
      id: expect.any(Number),
      ...createStudentDTO,
    });
  });

  it('should find all student', async () => {
    expect(await controllerStudent.getAll).toEqual(studentData);
    expect(await typeof controllerStudent.getAll).toEqual('object')
  });

  it('should find student by id', async () => {
    const studentId = 64;
    expect(await controllerStudent.getOne(studentId)).toBe(studentId);
    expect(await getByIdStudent.call).toHaveBeenCalledTimes(1);
  });

  it('Should update a student ', async () => {
    const updateStudentDTO: UpdateStudentDTO = {
      nia: '151515',
      name: 'Alberto',
      lastName: 'PapaAlberto',
      motherName: 'MamaAlberto',
      group: '1',
      classGroup: 'a',
    };
    const id = 1;
    expect(await controllerStudent.update(id, updateStudentDTO)).toEqual({
      id: id,
      ...updateStudentDTO,
    });

    const updateSpy = jest.spyOn(updateStudent, 'call');
    controllerStudent.update(id, updateStudentDTO);
    expect(updateSpy).toHaveBeenCalledWith(id, updateStudentDTO);
  });

  it('should delete a student by id ', async () => {
    const mockDeleteStudent: DeleteResult = {
      raw: [],
      affected: 1,
    };
    expect((await controllerStudent.delete(1))['affected']).toEqual(
      mockDeleteStudent,
    );
  });
});
