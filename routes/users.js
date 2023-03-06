import express from 'express'
import {getUser, findUser, like, dislike} from '../controllers/User.js'
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

router.get('/:id', verifyToken, getUser);

router.get("/find/:id", findUser);

router.put("/like/:videoId", verifyToken, like);

router.put("/dislike/:videoId", verifyToken, dislike);

export default router; 