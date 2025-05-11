import { Router } from "express";
import { authRequiered } from "../middlewares/validateToken.js";
import {
  getDatas,
  getData,
  createData,
  updateData,
  deleteData,
} from "../controllers/userData.controller.js";

const router = Router();

router.get("/tasks", authRequiered, getDatas);

router.get("/tasks/:id", authRequiered, getData);

router.post("/tasks", authRequiered, createData);

router.delete("/tasks/:id", authRequiered, deleteData);

router.put("/tasks/:id", authRequiered, updateData);

export default router;
