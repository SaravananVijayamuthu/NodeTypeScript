import { Router } from 'express';   //import express from 'express';
import { Todo } from '../models/todos';

const todos: Todo[] = [];

const router = Router();            //const router = express.Router();

//get
router.get('/', (req, res, next) => {
    res.status(200).json({todos:todos});
});

//post
router.post('/todo', (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
});

export default router;