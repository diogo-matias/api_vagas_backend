import { Router } from "express";
import UserController from "./controllers/user.controler";
import createUserValidator from "./validators/create-user.validator";
import loginUserValidator from "./validators/login-user.validator";
import tokenValidator from "./validators/token.validator";

export default () => {
  const router = Router();
  const userController = new UserController();

  router.post(
    "/users",
    new createUserValidator().validate,
    userController.createUser
  );

  router.post(
    "/user/login",
    new loginUserValidator().validate,
    userController.loginUser
  );

  router.get("/user", new tokenValidator().validate, userController.getUser);

  return router;
};
