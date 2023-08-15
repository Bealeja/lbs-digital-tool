import express from "express";
import { getActiveFundraisers } from "../controllers/fundraisers.js";

const router = express.Router();

/* Read */
router.get("/", getActiveFundraisers);

export default router;
