import { Express } from "express";
import userRoutes from "../../app/features/users/users.routes";

export default (app: Express) => {
  app.get("", (req, res) => {
    res.send("vamo dale");
  });

  app.use(userRoutes());
};
