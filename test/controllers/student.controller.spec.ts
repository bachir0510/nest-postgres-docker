import { Connection } from 'typeorm';
import { StudentController } from '../../src/app/controllers/v1/student/student.controller';
import { CreateStudentDTO } from '../../src/domain/dto/student/createStudent.dto';
import { UpdateStudentDTO } from '../../src/domain/dto/student/updateStudent.dto';
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
  let controllerStudent: StudentController;
  let createStudent: CreateStudent;
  let getAllStudent: GetStudents;
  let getByIdStudent: GetByIdStudent;
  let deleteSutdent: DeleteSutdent;
  let updateStudent: UpdateStudent;
 
  const mockCreateStudentDto: CreateStudentDTO = {
    nia: '0000',
    name: 'Alberto',
    lastName: 'PapaAlberto',
    motherName: 'MamaAlberto',
    group: '1',
    classGroup: 'a',
  };

  const mockUpdateStudentDto: UpdateStudentDTO = {
    nia: '0000',
    name: 'Alberto',
    lastName: 'PapaAlberto',
    motherName: 'MamaAlberto',
    group: '1',
    classGroup: 'a',
  };

  const mockStudentEntity: Student = {
    id: 1,
    nia: '0000',
    name: 'Alberto',
    lastName: 'PapaAlberto',
    motherName: 'MamaAlberto',
    group: '1',
    classGroup: 'a',
  };

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    database = nestModule.get('DATABASE_CONNECTION');
    controllerStudent = nestModule.get(StudentController);
    createStudent = nestModule.get(CreateStudent);
    getAllStudent = nestModule.get(GetStudents);
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

  describe('Create new Student', () => {
    it('Should call use case CreateStudent with correct values', async () => {
      const mockParam = mockCreateStudentDto;
      const createSpy = jest.spyOn(createStudent, 'call');
      expect(controllerStudent.create(mockParam));
      expect(createSpy).toHaveBeenCalledWith(mockParam);
    });
    it('should return a student on sccess', async () => {
      const mockReturn = mockStudentEntity;
      jest
        .spyOn(createStudent, 'call')
        .mockImplementationOnce(() => Promise.resolve(mockReturn));
      const response = await controllerStudent.create(mockCreateStudentDto);
      expect(response).toEqual(mockReturn);
    });
  });

  describe('Get all student', () => {
    it('should call GetStudent', async () => {
      const findSpy = jest.spyOn(getAllStudent, 'call');
      expect(controllerStudent.getAll());
      expect(findSpy).toHaveBeenCalled();
    });
    it('should get all student', async () => {
      const mockReturn = [mockStudentEntity];
      jest
        .spyOn(getAllStudent, 'call')
        .mockImplementationOnce(() => Promise.resolve(mockReturn));
      const response = await controllerStudent.getAll();
      expect(response).toEqual(mockReturn);
    });
  });

  describe('Get By Id', () => {
    it('should call a GetByIdStudent', async () => {
      const studentId = 1;
      const findByIdSpy = jest.spyOn(getByIdStudent, 'call');
      await controllerStudent.getOne(studentId);
      expect(findByIdSpy).toHaveBeenCalledWith(studentId);
    });
    it('should find student by id', async () => {
      const studentId = 64;
      const mockReturn = mockStudentEntity;
      jest
        .spyOn(getByIdStudent, 'call')
        .mockImplementationOnce(() => Promise.resolve(mockReturn));
      expect(await controllerStudent.getOne(studentId)).toEqual(mockReturn);
    });
  });

  describe('Update Student', () => {
    it('Should call UpdateStudent whith correct values', async () => {
      const studentId = 1;
      const updateSpy = jest.spyOn(updateStudent, 'call');
      await controllerStudent.update(studentId, mockUpdateStudentDto);
      expect(updateSpy).toHaveBeenCalledWith(studentId, mockCreateStudentDto);
    });
  });

  describe('Delete Student', () => {
    it('should delete a student by id ', async () => {
      const studentId = 1;
      const deleteSpy = jest.spyOn(deleteSutdent, 'call');
      await controllerStudent.delete(studentId);
      expect(deleteSpy).toHaveBeenCalledWith(studentId);
    });
  });
});
