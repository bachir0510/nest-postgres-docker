import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
<<<<<<< HEAD
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
=======
import { ApiOperation, ApiTags } from '@nestjs/swagger';
>>>>>>> develop
import { CreateStudentDTO } from '../../../../domain/dto/student/createStudent.dto';
import { GetStudentOutputDTO } from '../../../../domain/dto/student/getAllOutput.dto';
import { StudentOutputDto } from '../../../../domain/dto/student/studentOutput.dto';
import { UpdateStudentDTO } from '../../../../domain/dto/student/updateStudent.dto';
<<<<<<< HEAD
import { JwtAuthGuard } from '../../../../domain/guards/jwtAuth.guard';
=======
import { Student } from '../../../../domain/entities/student.entity';
>>>>>>> develop
import {
  CreateStudent,
  GetByIdStudent,
  GetStudents,
  DeleteStudent,
  UpdateStudent,
} from '../../../../domain/use_cases/student';

@ApiTags('Student')
@Controller('student')
export class StudentController {
  constructor(
    private readonly createStudent: CreateStudent,
    private readonly getSudents: GetStudents,
    private readonly getByIdSudent: GetByIdStudent,
    private readonly updateStudent: UpdateStudent,
    private readonly deteStudent: DeleteStudent,
  ) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
<<<<<<< HEAD
  async getAll(): Promise<GetStudentOutputDTO[]> {
    return await this.getSudents.call();
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  async getOne(@Param('id') id: number): Promise<GetStudentOutputDTO> {
    return await this.getByIdSudent.call(id);
=======
  @ApiOperation({
    description: 'Return all student',
  })
  async getAll(): Promise<Student[]> {
    return this.getSudents.call();
>>>>>>> develop
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
<<<<<<< HEAD
  async create(
    @Body() studentDTO: CreateStudentDTO,
  ): Promise<StudentOutputDto> {
    return await this.createStudent.call(studentDTO);
=======
  @ApiOperation({
    description: 'Create a new student',
  })
  async create(@Body() studentDTO: CreateStudentDTO): Promise<Student> {
    return this.createStudent.call(studentDTO);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Return one student by id',
  })
  async getOne(@Param('id') id: number): Promise<Student> {
    return this.getByIdSudent.call(id);
>>>>>>> develop
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Put(':id')
  @ApiOperation({
    description: 'Update student information by id ',
  })
  async update(@Param('id') id: number, @Body() studentDTO: UpdateStudentDTO) {
    return this.updateStudent.call(id, studentDTO);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
<<<<<<< HEAD
  delete(@Param('id') id: number): Promise<StudentOutputDto> {
=======
  @ApiOperation({
    description: 'delete student by id ',
  })
  delete(@Param('id') id: number): Promise<Student> {
>>>>>>> develop
    return this.deteStudent.call(id);
  }
}
