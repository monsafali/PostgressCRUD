import express from "express";
import { connection } from "./database/postgres.js";
import router from "./view/routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user/api", router);

app.listen(3000, () => {
  connection();
  console.log("Server start succesfuly at 3000");
});
