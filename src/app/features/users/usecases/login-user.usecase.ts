import User from "../../../models/user";
import UserRepository from "../repositories/user.repository";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import envsConfig from "../../../../main/env/envs-config";

export default class LoginUser {
  async execute(reqBody: any): Promise<any> {
    const { username, password } = reqBody;
    const repository = new UserRepository();
    const user = await repository.findUserByUsername(username);

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new Error("invalid password");
    }

    const token = sign(user.name, envsConfig.TOKEN_SECRET!);

    return token;
  }
}
