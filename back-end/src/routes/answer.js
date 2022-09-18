import { Router } from "express";
import { findAll, getAnswerById, addAnswer, updateAnswer, deleteAnswer } from "../controller/answerController";
import AccessToken from '../middleware/verifyToken';


const Route = Router();

Route.get('/answers', AccessToken(1), findAll);
Route.get('/answer/:id', AccessToken(1), getAnswerById);
Route.post('/addAnswer', AccessToken(2), addAnswer);
Route.put('/updateAnswer/:id', AccessToken(2), updateAnswer);
Route.delete('/deleteAnswer/:id', AccessToken(3), deleteAnswer);

export default Route;