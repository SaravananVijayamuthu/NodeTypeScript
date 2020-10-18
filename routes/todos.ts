import { Router } from 'express';   //import express from 'express';
import { Todo } from '../models/todos';

//todo arr in mem
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
    res.status(201).json({message: 'added todo', todo: newTodo, todos: todos});
});

//put 
router.put('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = {id: todos[todoIndex].id, text: req.body.text};
        return res.status(200).json({message: 'updated todo', todos: todos});
    }
    res.status(404).json({message: `Couldn't find todo for this ID please try another ID.`});
})

export default router;