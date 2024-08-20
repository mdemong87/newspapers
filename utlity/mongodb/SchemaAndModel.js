import { model, models, Schema } from "mongoose";


//add schema is here
//news schema
const NewsSchema = new Schema({
    title: String,
    dis: String,
    file: Object,
    youtube:String,
    catagory:String,
    createdAt: { type: Date, default: Date.now() }
})



//all model is here
//news model
const NewsModel = models.NewsModel || model("NewsModel", NewsSchema);


export default NewsModel;