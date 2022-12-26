import User from "../../../models/user";
import databaseConnection from "../../../../main/database/database-connection";
import { UserEntity } from "../../../shared/database/entities";
import usersRoutes from "../users.routes";
import bcrypt from "bcrypt";

export default class UserRepository {
  async verifyIfUserExistByUsername(username: string): Promise<Boolean> {
    const manager = databaseConnection.manager;

    const userEntity = await manager.findOne(UserEntity, {
      where: { username },
    });

    return !!userEntity;
  }

  async createUser(user: User, encryptedPassword: string): Promise<any> {
    const manager = databaseConnection.manager;

    const userEntity = manager.create(UserEntity, {
      uid: user.uid,
      name: user.name,
      email: user.email,
      password: encryptedPassword,
      username: user.username,
      profile: user.profile,
    });

    await manager.save(userEntity);
    return userEntity;
  }

  async findUserByUsername(username: string) {
    const manager = databaseConnection.manager;

    const userEntity = await manager.findOne(UserEntity, {
      where: { username },
    });

    if (!userEntity) {
      throw new Error("User not found");
    }

    return userEntity;
  }
}
