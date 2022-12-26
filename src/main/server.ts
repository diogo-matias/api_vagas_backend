import app from "./config/app";
import typeorm from "./database/database-connection";

typeorm
  .initialize()
  .then(() => {
    app.listen(3333, () => console.log("Server is running...  "));
  })
  .catch((err) => {
    console.log(err);
  });
