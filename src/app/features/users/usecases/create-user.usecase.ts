import User from "../../../models/user";
import UserRepository from "../repositories/user.repository";
import { hash } from "bcrypt";

export default class CreateUser {
  async execute(reqBody: any): Promise<any> {
    const { name, password, username, profile, company, uid, email } = reqBody;
    const userRepository = new UserRepository();
    const user = new User(name, username, email, profile, uid, company);

    const usernameExist = await userRepository.verifyIfUserExistByUsername(
      username
    );

    if (usernameExist) {
      throw new Error("Já existe um usuário cadastrado com esse username");
    }

    const encryptedPassword = await hash(password, 8);

    await userRepository.createUser(user, encryptedPassword);

    return user.toJson();
  }
}
