// it will contain all routes in backend
import express from 'express'
import { addTodo, deleteTask, getAllTask, updateTask } from '../controller/todoController.js';
const router = express.Router();
// to add the todo task
router.post('/',addTodo)
// to get all task
router.get('/',getAllTask)
// to delete task
router.delete('/:id',deleteTask)
//update task
router.put('/:id',updateTask)
export  default router