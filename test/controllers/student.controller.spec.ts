import { Connection, UpdateResult } from 'typeorm';
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
import {
  mockCreateStudentDto,
  mockStudentEntity,
  mockUpdateStudentDto,
} from '../studentData';
import { testsAppModule } from '../test.app.module.factory';

describe('StudentController', () => {
  let database: Connection;
  let controllerStudent: StudentController;
  let createStudent: CreateStudent;
  let getAllStudent: GetStudents;
  let getByIdStudent: GetByIdStudent;
  let deleteStudent: DeleteSutdent;
  let updateStudent: UpdateStudent;

  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    database = nestModule.get('DATABASE_CONNECTION');
    controllerStudent = nestModule.get(StudentController);
    createStudent = nestModule.get(CreateStudent);
    getAllStudent = nestModule.get(GetStudents);
    getByIdStudent = nestModule.get(GetByIdStudent);
    deleteStudent = nestModule.get(DeleteSutdent);
    updateStudent = nestModule.get(UpdateStudent);
  });

  afterAll(async () => {
    await database.close();
  });

  it('should be defined', () => {
    expect(controllerStudent).toBeDefined();
  });

  describe('Create new Student', () => {
    it('should return a student on sccess', async () => {
      jest
        .spyOn(createStudent, 'call')
        .mockImplementationOnce(() => Promise.resolve(mockStudentEntity));
      const response = await controllerStudent.create(mockCreateStudentDto);
      expect(response).toEqual(mockStudentEntity);
    });
  });

  describe('Get all student', () => {
    it('should get all student', async () => {
      const mockReturn = [mockStudentEntity];
      const findSpy = jest
        .spyOn(getAllStudent, 'call')
        .mockImplementationOnce(() => Promise.resolve(mockReturn));
      const response = await controllerStudent.getAll();
      expect(response).toEqual(mockReturn);
      expect(findSpy).toHaveBeenCalled();
    });
  });

  describe('Get By Id', () => {
    it('should find student by id', async () => {
      const studentId = 64;
      const mockReturn = mockStudentEntity;
      const findByIdSpy = jest
        .spyOn(getByIdStudent, 'call')
        .mockImplementationOnce(() => Promise.resolve(mockReturn));
      expect(await controllerStudent.getOne(studentId)).toEqual(mockReturn);
      expect(findByIdSpy).toHaveBeenCalledWith(studentId);
    });
  });

  describe('Update Student', () => {
    it('Should call UpdateStudent whith correct values', async () => {
      const studentId = 1;
      const updateSpy = jest
        .spyOn(updateStudent, 'call')
        .mockImplementationOnce(() =>
          Promise.resolve({
            raw: undefined,
            affected: 1,
            generatedMaps: [],
          }),
        );
      const response = await controllerStudent.update(
        studentId,
        mockUpdateStudentDto,
      );
      expect(updateSpy).toHaveBeenCalledWith(studentId, mockCreateStudentDto);
      expect(response.affected).toBe(1);
    });
  });

  describe('Delete Student', () => {
    it('should delete a student by id ', async () => {
      const studentId = 1;
      const deleteSpy = jest
        .spyOn(deleteStudent, 'call')
        .mockImplementationOnce(() => Promise.resolve(mockStudentEntity));
      const response = await controllerStudent.delete(studentId);
      expect(deleteSpy).toHaveBeenCalledWith(studentId);
      expect(response).toEqual(mockStudentEntity);
    });
  });
});
