import express, { Request, Response, json} from 'express';
import recipeRouter from './Routes/recipes';
import categoryRouter from './Routes/category';
import cors from 'cors'

import { connect } from 'mongoose'
connect('mongodb://localhost:27017/Recept')


const app = express();

app.use(cors())

app.use(json());
const port = 4000

//routes
app.use('/recipes', recipeRouter);
app.use('/category', categoryRouter);
app.use('/:id', recipeRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
