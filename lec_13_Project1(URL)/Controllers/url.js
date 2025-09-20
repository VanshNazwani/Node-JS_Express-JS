import { Url } from "../Models/Url.js";
import shortid from "shortid";

export const urlshort = async(req,res) => {
    const longUrl = req.body.longUrl
    const shortcode = shortid.generate()
    const shortUrl = `http://localhost:3000/${shortcode}`

    // save to database 
    const newUrl = new Url({shortcode, longUrl})
    await newUrl.save()

    console.log("Url short successfully");
    

    res.render("index.js",{shortUrl})
}