import express, { Request, Response} from 'express';
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


// router.get ('/', async (req: Request, res: Response) => {
//     if(req.query.search) {
//         const recipes = await getRecipesBySearch(req.query);
//         res.json(recipes);
//     } else {
//         const recipes = await getRecipes();
//         res.json(recipes);
//     }
// });

// router.get('/', async (req: Request, res: Response) => {
//     // if(req.query.search) 
//     {
//                 const recipes = await getRecipesBySearch(req.query.search);
            
//                 res.json(recipes);}
//     // const returnRecipes = await getRecipesBySearch(req.query);
//     // res.status(200).json(returnRecipes);
// });

router.get('/search/:query', async (req: Request, res: Response) => {
    
        const recipes = await getRecipesBySearch(req.params.query)
         res.json(recipes)
       
});

// router.get('/:recipes/:serchQuery', async (req: Request, res: Response) => {
//     const returnRecipes = await getRecipesBySearch(req.params.query);
//     res.status(200).json(returnRecipes);
// });
// router.get('/:recipes/:serchQuery', async (req: Request, res: Response) => {
//     const returnRecipes = await getRecipesBySearch(req.params, req.params.searchQuery);
//     res.status(200).json(returnRecipes)
// });






export default router;