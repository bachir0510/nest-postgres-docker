
import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CreateUserDTO } from "../../dto/user/createUser.dto";
import { User } from "../../entitys/user.entity";

@Injectable()
export class CreateUser {
    constructor(@Inject(User.name) private readonly userRepository: Repository<User>){}

    async call(userDto: CreateUserDTO): Promise<User> {
        const userExist = await this.userRepository.findOne({email: userDto.email})
        if(userExist)
        throw new BadRequestException('User already registerd with email');

        const user = this.userRepository.create(userDto);
        return this.userRepository.save(user)
    }
}