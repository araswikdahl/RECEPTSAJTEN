import express, { Request, Response, json} from 'express';
import recipeRouter from './Routes/recipes';
import categoryRouter from './Routes/category';
import cors from 'cors'
import dotenv from 'dotenv'

import { connect } from 'mongoose'
// connect('mongodb+srv://SaraWikdahl:ZBBGFr7EBmuQ3cxC@cluster0.2sq41.mongodb.net/Recept?retryWrites=true&w=majority')
// connect('mongodb://localhost:27017/Recept')

dotenv.config();

const app = express();

app.use(cors())

app.use(json());
// const port = 4000
const port = process.env.PORT || 4000

if (process.env.MONGO_DB_CONNECTION_STRING) {
    connect(process.env.MONGO_DB_CONNECTION_STRING).then(() => {
        app.listen(port, () => console.log('listening to port: ' + port));
    })
} else {
    console.log('Configuration MONGO_DB_CONNECTION_STRING not set')
}

//routes
app.use('/recipes', recipeRouter);
app.use('/category', categoryRouter);
app.use('/:id', recipeRouter);


app.listen(port, () => {
    console.log(`Example app listening on port +port ${port}`)
})
