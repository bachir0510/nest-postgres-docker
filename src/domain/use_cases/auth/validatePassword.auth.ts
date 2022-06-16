import { Injectable } from "@nestjs/common";
import { LoginDto } from "../../dto/auth/login.dto";
import { JwtPayload } from "../../interface/jwtPayload.interface";
import { ComparePassword, GetByEmail } from "../user";

@Injectable()
export class ValidatePassord {

    constructor(
    private readonly getByEmail: GetByEmail,
    private readonly checkPassword: ComparePassword,
    ){}

async call(loginDto: LoginDto): Promise<JwtPayload>{
    const { email } = loginDto;
    const user = await this.getByEmail.call(email);
    if (
      user &&
      (await this.checkPassword.call(loginDto.password, user.password))
    ){
     return {
         id: user.id,
         email: user.email,
         active: user.active
     }
    }else {
        return null
    }
    }
}