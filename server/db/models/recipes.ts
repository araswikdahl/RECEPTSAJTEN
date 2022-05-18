import { Schema, model } from 'mongoose'


// const mongoose =require('mongoose')

export interface RecipeType {
    title: string,
    description:string,
    imageUrl:string,
    timeInMins:Number,
    ratings:Array<number>,
    category:Array<string>,
    ingredients:[{name:string, amount: number, unit:string}],
    instructions:Array<string>,
    comments:any
}

const schema = new Schema <RecipeType>({
    title: { type: String, required: true},
    description: { type: String, required: true},
    imageUrl: { type: String, required: true},
    timeInMins: { type: Number, required: true},
    ratings: { type: [Number], required: true},
    category: { type: [String], required: true},
    ingredients: { type: [Object], required: true},
    instructions: { type: [String], required: true},
    comments: { type: Array, required: true},
})

const RecipeModel = model <RecipeType>
('Recipe', schema)

export default RecipeModel;