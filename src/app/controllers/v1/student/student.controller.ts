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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateStudentDTO } from '../../../../domain/dto/student/createStudent.dto';
import { GetStudentOutputDTO } from '../../../../domain/dto/student/getAllOutput.dto';
import { StudentOutputDto } from '../../../../domain/dto/student/studentOutput.dto';
import { UpdateStudentDTO } from '../../../../domain/dto/student/updateStudent.dto';
import { JwtAuthGuard } from '../../../../domain/guards/jwtAuth.guard';
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
    private readonly upDataSudent: UpdateStudent,
    private readonly deteStudent: DeleteStudent,
  ) {}

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get()
  async getAll(): Promise<GetStudentOutputDTO[]> {
    return await this.getSudents.call();
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  async getOne(@Param('id') id: number): Promise<GetStudentOutputDTO> {
    return await this.getByIdSudent.call(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  async create(
    @Body() studentDTO: CreateStudentDTO,
  ): Promise<StudentOutputDto> {
    return await this.createStudent.call(studentDTO);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Put(':id')
  async update(@Param('id') id: number, @Body() studentDTO: UpdateStudentDTO) {
    return await this.upDataSudent.call(id, studentDTO);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  delete(@Param('id') id: number): Promise<StudentOutputDto> {
    return this.deteStudent.call(id);
  }
}
