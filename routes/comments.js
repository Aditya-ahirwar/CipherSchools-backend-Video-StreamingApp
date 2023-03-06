import express from "express";
import { addComment, getComments } from "../controllers/Comment.js";
import {verifyToken} from "../verifyToken.js"
const router = express.Router();

router.post("/", verifyToken, addComment)
router.get("/:videoId", getComments)

export default router;