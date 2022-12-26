import User from "../../../models/user";
import UserRepository from "../repositories/user.repository";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import envsConfig from "../../../../main/env/envs-config";

export default class GetUser {
  async execute(reqBody: any): Promise<any> {}
}
