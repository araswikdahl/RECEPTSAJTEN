import express, { Request, Response} from 'express';
// import { getRecipes, getRecipesBySearch, getRecipesById, postRating } from "../db/recipeCRUD";
import { getRecipes, getRecipesBySearch, getRecipesById } from "../db/recipeCRUD";

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


// router.post('/ratings', async (req: Request, res: Response) => {
//     const returnRecipes = await ratingById(req.body._id, req.body.ratings);
//     res.status(200).json(returnRecipes);
// })

// router.post("/:id/ratings", async (req: Request, res: Response) => {
//     const postedRating = await postRating(req.params.id, req.body.ratings);
//     console.log(req.body)
//     res.status(201).json(postedRating);
//   });
 



export default router;