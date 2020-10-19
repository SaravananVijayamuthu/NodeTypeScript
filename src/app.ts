import express from 'express';
import todosRoutes from './routes/todos';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(todosRoutes);


app.listen(PORT, () => {
    console.log('Server running on port %d', PORT);
});