import { Injectable, Req, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { LoginDto } from '../../dto/auth/login.dto';
import { LoginOutputDto } from '../../dto/auth/LoginOutputDto';
import { User } from '../../entitys/user.entity';
import { JwtPayload } from '../../interface/jwtPayload.interface';
import { ComparePassword, GetByEmail } from '../user';

@Injectable()
export class LoginUser {
  constructor(
    private readonly getByEmail: GetByEmail,
    private readonly checkPassword: ComparePassword,
    private readonly jwtService: JwtService,
    // no se si sellama el repositorio asi
    // private readonly repository: Repository<User>
  ) {}

  async call(loginDto: LoginDto): Promise<LoginOutputDto> {
    const { email } = loginDto;
    const user = await this.getByEmail.call(email);
    if (
      user &&
      (await this.checkPassword.call(loginDto.password, user.password))
    ) {
      const paylaod: JwtPayload = { id: user.id, email, active: user.active };
      const token = this.jwtService.sign(paylaod);
      return { token };
    }
    throw new UnauthorizedException('Please check your password');
  }
  
  // puse este caso de uso aqui para probar si funciona antes de moverla 
  // estoy intentado llamar el repositoryo del Use pero no deja 

   async refresh(@Req() {user} ){
    this.repository.update(user.id, { lastLoginAt: new Date()})
    const token = this.jwtService.sign({ id: user.id, email: user.email })

    return token
  }
}
