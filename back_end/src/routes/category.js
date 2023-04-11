import express from "express";
import { create, get, getAll, remove, update } from "../controllers/category";
import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();

router.get("/brands", getAll);
router.get("/brands/:id", get);
router.post("/brands", checkPermission, create);
router.delete("/brands/:id", checkPermission, remove);
router.patch("/brands/:id", checkPermission, update);

export default router;
