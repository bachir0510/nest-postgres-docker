import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "../../entity/user.entity";

@Injectable()
export class UpdateRefreshToken {
  constructor(
    @Inject(User.name) private readonly userRepository: Repository<User>,
  ) {}

  async call(refreshToken: string, id: number, refreshtokenexpires) {
   return await this.userRepository.update(id, {
      refreshtoken: refreshToken,
      refreshtokenexpires,
    });
  }
}
