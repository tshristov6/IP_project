import {Router} from "express";
import * as comment from "../controllers/comment.controller";

const commentRouters = Router();

commentRouters.get("/opinions", comment.getAllComment);
commentRouters.get("/opinions/:id", comment.getSingleComment);
commentRouters.post("/opinions", comment.createComment);
commentRouters.put("/opinions/:id", comment.updateComment);
commentRouters.delete("/opinions/:id", comment.deleteComment);

export {commentRouters}