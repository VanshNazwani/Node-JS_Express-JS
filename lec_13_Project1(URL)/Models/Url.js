import mongoose from "mongoose";
const urlschema = new mongoose.Schema({
    shortcode : String,
    longUrl : String
})

export const Url = mongoose.model('shortUrl',urlschema)
