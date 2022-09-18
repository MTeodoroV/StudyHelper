import { Router } from "express";
import { findAll, getMatterById, addMatter, updateMatter, deleteMatter } from "../controller/matterController";
import AccessToken from '../middleware/verifyToken';


const Route = Router();

Route.get('/matters', AccessToken(1), findAll);
Route.get('/matter/:id', AccessToken(1), getMatterById);
Route.post('/addMatter', AccessToken(2), addMatter);
Route.put('/updateMatter/:id', AccessToken(2), updateMatter);
Route.delete('/deleteMatter/:id', AccessToken(3), deleteMatter);

export default Route;