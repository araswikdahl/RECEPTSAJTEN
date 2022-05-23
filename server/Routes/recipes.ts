import express, { Request, Response} from 'express';
import { getRecipes, getRecipesBySearch, getRecipesById, ratingById } from "../db/recipeCRUD";

const router = express.Router();

router.get('/', async (req:Request, res:Response)=> {
    const returnRecipes = await getRecipes();
    res.status(200).json(returnRecipes);
})

router.get("/:id", async (req: Request, res: Response) => {
    const singleRecipes = await getRecipesById(req.params.id);
    res.status(200).json(singleRecipes);
});


router.get('/search/:query', async (req: Request, res: Response) => {
    
        const recipes = await getRecipesBySearch(req.params.query)
         res.json(recipes)
       
});


router.post('/ratings', async (req: Request, res: Response) => {
    const returnRecipes = await ratingById(req.body._id, req.body.ratings);
    res.status(200).json(returnRecipes);
})



export default router;