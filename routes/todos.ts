import { Router } from 'express';   //import express from 'express';
import { Todo } from '../models/todos';

//type alias
type RequestBody =  {text: string};
type RequestParams = {todoId: string};

//todo arr in mem
let todos: Todo[] = [];

const router = Router();            //const router = express.Router();

//get
router.get('/', (req, res, next) => {
    res.status(200).json({todos:todos});
});

//post
router.post('/todo', (req, res, next) => {
    const body = req.body as RequestBody;
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({message: 'added todo', todo: newTodo, todos: todos});
});

//put 
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.body as RequestParams;
    const tid = params.todoId;
    const body = req.body as RequestBody;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = {id: todos[todoIndex].id, text: body.text};
        return res.status(200).json({message: 'updated todo', todos: todos});
    }
    res.status(404).json({message: `Couldn't find todo for this ID please try another ID.`});
});

//delete
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.body as RequestParams;
    todos = todos.filter(todoItem => todoItem.id !== params.todoId);
    res.status(200).json({message: 'Deleted!!', todos: todos });
});

export default router;