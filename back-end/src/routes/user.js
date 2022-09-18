import { Router } from "express";
import { findAll, getUserById, addUser, updateUser, deleteUser } from "../controller/userController";
import AccessToken from '../middleware/verifyToken';


const Route = Router();

Route.get('/users', AccessToken(1), findAll);
Route.get('/user/:id', AccessToken(1), getUserById);
Route.post('/addUser', addUser);
Route.put('/updateUser/:id', AccessToken(1), updateUser);
Route.delete('/deleteUser/:id', AccessToken(3), deleteUser);

export default Route;