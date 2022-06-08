import { Module } from "@nestjs/common";
import { DatabaseModule } from "../../../infrastructure/database/database.module";
import { userProvider } from "../../../infrastructure/database/providers/user.provider";
import { CreateUser } from "./create.user";
import { DeleteUser } from "./delete.user";
import { GetUsers } from "./getAll.user";
import { GetByIdUser } from "./getById.user";
import { UpdateUser } from "./update.user";

@Module({
    imports: [DatabaseModule],
    providers:[...userProvider, CreateUser, GetUsers, GetByIdUser, UpdateUser, DeleteUser],
exports:[CreateUser, GetUsers, GetByIdUser, UpdateUser, DeleteUser]

})
export class UserModule {}