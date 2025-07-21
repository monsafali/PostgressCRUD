import express from "express";
import {
  getAllEmp,
  PostUser,
  UpdateUser,
  DeleteUser,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/getAll", getAllEmp);
router.post("/PostUser", PostUser);
router.put("/emp/:emId", UpdateUser);
router.delete("/emp/:emId", DeleteUser);

export default router;
