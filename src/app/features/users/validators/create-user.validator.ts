import { NextFunction, Request, Response } from "express";

export default class createUserValidator {
  validate(req: Request, res: Response, next: NextFunction) {
    const { name, username, password, company, profile } = req.body;

    if (!name || name.length < 3) {
      return res.status(400).json({ error: "Nome de usuário inválido" });
    }

    if (!username) {
      return res.status(400).json({ error: "username inválido" });
    }

    return next();
  }
}
