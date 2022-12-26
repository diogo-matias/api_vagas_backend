import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import envsConfig from "../../../../main/env/envs-config";

export default class tokenValidator {
  validate(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization;

    if (!authToken) {
      return res.status(400).json({ error: "autenticação necessária" });
    }

    const result = verify(authToken, envsConfig.TOKEN_SECRET!);

    if (!result) {
      return res.status(400).json({ error: "token inválido" });
    }

    next();
  }
}
