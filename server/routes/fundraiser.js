import express from "express";
import { getActiveFundraisers } from "../controllers/fundraisers";

const router = express.Router();

router.get("/", getActiveFundraisers);

export default router;
