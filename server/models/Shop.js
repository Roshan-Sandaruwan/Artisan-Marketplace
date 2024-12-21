import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    coverImage:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});

const Shop = mongoose.model('Shop',shopSchema);

export default Shop;
