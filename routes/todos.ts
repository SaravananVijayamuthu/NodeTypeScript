import { Router } from 'express';   //import express from 'express';

const todos = [];
const router = Router();            //const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({todos:todos});
});

export default router;