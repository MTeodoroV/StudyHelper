import { Router } from "express";
import { findAll, getExerciseById, addExercise, updateExercise, deleteExercise } from "../controller/exerciseController";
import AccessToken from '../middleware/verifyToken';


const Route = Router();

Route.get('/exercises', AccessToken(1), findAll);
Route.get('/exercise/:id', AccessToken(1), getExerciseById);
Route.post('/addExercise', AccessToken(2), addExercise);
Route.put('/updateExercise/:id', AccessToken(2), updateExercise);
Route.delete('/deleteExercise/:id', AccessToken(3), deleteExercise);

export default Route;