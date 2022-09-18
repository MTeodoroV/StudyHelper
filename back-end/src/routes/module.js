import { Router } from "express";
import { findAll, getModuleById, addModule, updateModule, deleteModule } from "../controller/moduleController";
import AccessToken from '../middleware/verifyToken';


const Route = Router();

Route.get('/modules', AccessToken(1), findAll);
Route.get('/module/:id', AccessToken(1), getModuleById);
Route.post('/matter/:id/addModule', AccessToken(2), addModule);
Route.put('/updateModule/:id', AccessToken(2), updateModule);
Route.delete('/deleteModule/:id', AccessToken(3), deleteModule);

export default Route;