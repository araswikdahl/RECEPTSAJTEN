export interface RecipeType {
    _id:string
    title: string,
    description:string,
    imageUrl:string,
    timeInMins:String,
    ratings:Array<number>,
    category:Array<string>,
    ingredients:[{name:string, amout: number, unit:string}],
    instructions:Array<string>,
    comments:any
}

