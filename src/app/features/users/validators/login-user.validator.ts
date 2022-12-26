import { NextFunction, Request, Response } from "express";

export default class loginUserValidator {
  validate(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;

    if (!username) {
      return res.status(400).json({ error: "o campo username é obrigatório" });
    }

    if (!password) {
      return res.status(400).json({ error: "o campo password é obrigatório" });
    }

    return next();
  }
}
