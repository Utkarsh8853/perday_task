import express from "express";
import { postController } from "../controllers/post.controller";
import auth from "../middleware/auth.middleware";

export const postRouter = express.Router();

postRouter.post('/post',auth, postController.post);
//authRouter.post('/login', authController.login);