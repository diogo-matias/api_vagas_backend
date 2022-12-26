import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../../../models/user";
import UserRepository from "../repositories/user.repository";
import CreateUser from "../usecases/create-user.usecase";
import LoginUser from "../usecases/login-user.usecase";
import GetUser from "../usecases/get-user.usecase";

export default class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const usecase = new CreateUser();

      const result = await usecase.execute(req.body);

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async loginUser(req: Request, res: Response) {
    try {
      const usecase = new LoginUser();

      const result = await usecase.execute(req.body);

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const usecase = new GetUser();

      const result = await usecase.execute(req.body);

      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}
