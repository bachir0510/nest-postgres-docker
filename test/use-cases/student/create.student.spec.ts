import { Connection, Repository } from 'typeorm';
import { CreateStudentDTO } from '../../../src/domain/dto/student/createStudent.dto';
import { Student } from '../../../src/domain/entitys/student.entity';
import { CreateStudent } from '../../../src/domain/use_cases/student';
import { testsAppModule } from '../../test.app.module.factory';

describe('StudentController', () => {
  let database: Connection;
  let createStudent: CreateStudent;
  let studentRepository: Repository<Student>
  
  beforeAll(async () => {
    const [nestModule] = await testsAppModule();
    database = nestModule.get('DATABASE_CONNECTION');
    createStudent = nestModule.get(CreateStudent);
    studentRepository =nestModule.get(Student.name)
  });

  afterAll(() => {
    database.close();
  });

  it('should be defined', () => {
    expect(createStudent).toBeDefined();
  });

  describe('Create', () => {
    const studentDto: CreateStudentDTO= {
      nia: '151515',
      name: 'Alberto',
      lastName: 'PapaAlberto',
      motherName: 'MamaAlberto',
      group: '1',
      classGroup: 'a',
    };

    const studentEntity: Student= {
        id: 1,
        nia: '151515',
        name: 'Alberto',
        lastName: 'PapaAlberto',
        motherName: 'MamaAlberto',
        group: '1',
        classGroup: 'a',
      };
   
    it('should call studentRepository create', async () => {
       const createSpy = jest.spyOn(studentRepository, "create");
       await createStudent.call(studentDto);
       expect(createSpy).toHaveBeenCalledWith(studentDto)
    })
    it('should create a new student', async () => {
      jest.spyOn(studentRepository, 'create').mockReturnValueOnce(studentEntity)
      expect(await createStudent.call(studentDto)).toEqual({
        id: expect.any(Number),
        ...studentDto,
      });
    });
  });
 });
