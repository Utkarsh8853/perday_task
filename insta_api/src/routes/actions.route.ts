import express from "express";
import { actionController } from "../controllers/actions.controller";
import auth from "../middleware/auth.middleware";

export const actionRouter = express.Router();

actionRouter.post('/action',auth, actionController.action);
actionRouter.get('/allComment', actionController.allComment);
actionRouter.get('/allLikes', actionController.allLikes);