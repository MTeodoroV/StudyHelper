import { Router } from "express";
import { findAll, getUserById, addUser, updateUser, deleteUser } from "../controller/userController";
import AccessToken from '../middleware/verifyToken';


const Route = Router();

Route.get('/users', AccessToken(1), findAll);
Route.get('/user/:id', getUserById);
Route.post('/addUser', addUser);
Route.put('/updateUser/:id', updateUser);
Route.delete('/deleteUser/:id', deleteUser);

export default Route;