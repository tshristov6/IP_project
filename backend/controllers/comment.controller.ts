import {Request, Response} from "express";
import {CommentModel} from "../models/comment.model";

const commentModel = new CommentModel();

const getAllComment = async (req: Request, res: Response) => {
    const comments = await commentModel.getAllComment();
    res.send(comments);
}
const getSingleComment = async (req: Request, res: Response) => {
    const { id } = req.params;
    const comment = await commentModel.getSingleComment(parseInt(id));
    res.send(comment);
}
const createComment = async (req: Request, res: Response) => {
    const data = req.body;
    await commentModel.postComment(data);
    res.send("You just posted a comment.... hopefully :)");
}
const updateComment = async (req: Request, res: Response) => {
    const data = req.params;
    const commentData = req.body;
    await commentModel.editComment(parseInt(data.id), commentData)
    res.send("Congrats you edited a comment...Why are you misspelling shit dumbass");
}
const deleteComment = async (req: Request, res: Response) => {
    const data = req.params;
    await commentModel.deleteComment(parseInt(data.id));
    res.send("Wow you deleted a comment. Were you too outta pocket on this one???")
}

export {getAllComment, getSingleComment, deleteComment, updateComment, createComment}