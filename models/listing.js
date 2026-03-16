const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        set:(v)=>v===""?"https://th.bing.com/th/id/OIP.UWZ4uz53WdWyPxDISmzARgHaE7?w=225&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3":v,
    },
    price:Number,
    location:String,
    country:String,
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;