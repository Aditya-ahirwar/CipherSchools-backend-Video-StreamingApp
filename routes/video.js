import express from "express";
import { addVideo, findVideo, addView, random, search} from "../controllers/Videos.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create a video
router.post("/", verifyToken, addVideo)
router.get("/find/:id", verifyToken, findVideo)
router.put("/view/:id", addView)
router.get("/random", random)
router.get("/search", search)

export default router;