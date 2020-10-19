"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); //import express from 'express';
//todo arr in mem
let todos = [];
const router = express_1.Router(); //const router = express.Router();
//get
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
//post
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'added todo', todo: newTodo, todos: todos });
});
//put 
router.put('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        return res.status(200).json({ message: 'updated todo', todos: todos });
    }
    res.status(404).json({ message: `Couldn't find todo for this ID please try another ID.` });
});
//delete
router.delete('/todo/:todoId', (req, res, next) => {
    todos = todos.filter(todoItem => todoItem.id !== req.params.todoId);
    res.status(200).json({ message: 'Deleted!!', todos: todos });
});
exports.default = router;
