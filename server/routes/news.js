import express from "express";
import { getNewsPosts } from "../controllers/news.js";

const router = express.Router();

/* Read */
router.get("/", getNewsPosts);

export default router;
