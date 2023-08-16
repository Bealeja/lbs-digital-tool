import express from "express";
import { getTableData } from "../controllers/tables.js";

const router = express.Router();
/* Read */
router.get("/", getTableData);

export default router;
