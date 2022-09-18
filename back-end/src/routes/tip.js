import { Router } from "express";
import { findAll, getTipById, addTip, updateTip, deleteTip } from "../controller/tipController";
import AccessToken from '../middleware/verifyToken';


const Route = Router();

Route.get('/tips', AccessToken(1), findAll);
Route.get('/tip/:id', AccessToken(1), getTipById);
Route.post('/addTip', AccessToken(2), addTip);
Route.put('/updateTip/:id', AccessToken(2), updateTip);
Route.delete('/deleteTip/:id', AccessToken(3), deleteTip);

export default Route;