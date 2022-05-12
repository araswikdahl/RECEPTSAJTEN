import express, { Request, Response} from 'express';
import { getCategories, getRecipesCategory, getRecipesBySearchCategory } from "../db/recipeCRUD";

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    const returnRecipes = await getCategories();
    res.status(200).json(returnRecipes)
});

router.get('/:category', async (req: Request, res: Response) => {
    const returnRecipes = await getRecipesCategory(req.params.category);
    res.status(200).json(returnRecipes)
});

// router.get('/:category/:serchQuery', async (req: Request, res: Response) => {
//     const returnRecipes = await getRecipesBySearchCategory(req.params.category, req.params.searchQuery);
//     res.status(200).json(returnRecipes)
// });

router.get('/:categoryName/recipes', async (req: Request, res: Response) => {
    const returnRecipes = await getRecipesBySearchCategory(req.params.categoryName);
    res.status(200).json(returnRecipes)
});


// router.get('/:category/:serchQuery', async (req: Request, res: Response) => {
//     const returnRecipes = await getRecipesBySearchCategory(req.params.category, req.params.searchQuery);
//     res.status(200).json(returnRecipes)
// });

export default router;