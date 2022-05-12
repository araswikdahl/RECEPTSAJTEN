
import RecipeModel, { RecipeType } from "./models/recipes"

export const getRecipes = async () => {
    const recipes = await RecipeModel.find()
    return recipes;
}

export const getRecipesById = async (id: string) => {
    const recipes = await RecipeModel.findById({_id: id});
    return recipes;
};

// export const getRecipesBySearch = async (search: string) => {
//     const recipes = await RecipeModel.find({
//         $or: [
//             { title: { $regex: '*search*', $options: 'i'}}
//         ]
//     })
// return recipes;
// }
export const getRecipesBySearch = async (title: string) => {
    const recipes = await RecipeModel.find({
        
             title: { $regex: title, $options: 'i'}
        
    })
return recipes;
}

// export const getRecipesBySearch = async (query: any) => {
//     return await RecipeModel.find(
//         {"title" :{ '$regex' : query.search, '$options' : "i"} });
    
// }


// export const getRecipesBySearch = async (query: any) => {
//     return await RecipeModel.find(
//       {"title" : {'$regex' : query, '$options': "i" }})
//   }

//CATEGORY

export const getCategories = async () => {
    return await RecipeModel.find().distinct('category')
  }

export const getRecipesCategory = async (category:string) => {
    const recipes = await RecipeModel.find({"category": category})
    return recipes;
}

//be någon att förklara!!
// export const getRecipesBySearchCategory = async (category: string, search: string) => {
//     const recipes = await RecipeModel.find({
//         $or: [
//             {"category": category, title: { $regex: search, $options: 'i'}}
//         ]
//     })
// return recipes;
// }
export const getRecipesBySearchCategory = async (category: string) => {
    const recipes = await RecipeModel.find({
        
            category: { $regex: category, $options: 'i'},
        
    });
return recipes;
}